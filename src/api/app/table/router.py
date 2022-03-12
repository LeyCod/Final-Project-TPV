from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.table.controller import register_table, get_all_tables
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

tables = Blueprint("tables", __name__)

@tables.route("/", methods=["GET"])
@jwt_required()
def validate_table():
    user_id = get_jwt_identity()
    tables = get_all_tables(user_id["id"])
    return jsonify("Hola"), 200

@tables.route("/register", methods=["POST"])
def create_table():
    body = request.get_json(force = True)
    return register_table(body)

@tables.route("/delete", methods=["DELETE"])
def delete_table():
    body = request.get_json(force = True)
    return table_delete(body)

@tables.route("/update", methods=["PUT"])
def update_table():
    body = request.get_json(force = True)
    return table_update(body)