"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from datetime import timedelta
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models.db import db
from api.app.company.router import companys
from api.app.user.router import users
from api.app.table.router import tables
from api.app.menu_item.router import menu_items
from api.app.order.router import orders
from api.app.order_item.router import order_items
from api.admin import setup_admin
from flask_jwt_extended import JWTManager

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Database configuration
db_url = os.getenv("DATABASE_URL")

if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_KEY")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours = 1)

MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)
jwt = JWTManager(app)

# Allow CORS requests to this API
CORS(app)

# Add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(companys, url_prefix="/api/company")
app.register_blueprint(users, url_prefix="/api/user")
app.register_blueprint(tables, url_prefix="/api/table")
app.register_blueprint(menu_items, url_prefix="/api/menu_item")
app.register_blueprint(orders, url_prefix="/api/order")
app.register_blueprint(order_items, url_prefix="/api/order_item")

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# Generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# Any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# This only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
