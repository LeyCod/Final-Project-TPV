import os
from flask_admin import Admin
from api.models.index import db, Company, User
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cyborg'
    admin = Admin(app, name='Final Project API - Admin', template_mode='bootstrap3')

    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(Company, db.session))
    admin.add_view(ModelView(User, db.session))
