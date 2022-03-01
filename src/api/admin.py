import os
from flask_admin import Admin
from api.models.index import db, Company, User, Table, MenuItem, Order, OrderItem, OrderStatus, PaymentMethod
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cyborg'
    admin = Admin(app, name='MasterGest API - Admin', template_mode='bootstrap3')

    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(Company, db.session))
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Table, db.session))
    admin.add_view(ModelView(MenuItem, db.session))
    admin.add_view(ModelView(Order, db.session))
    admin.add_view(ModelView(OrderItem, db.session))
    admin.add_view(ModelView(OrderStatus, db.session))
    admin.add_view(ModelView(PaymentMethod, db.session))
