from api.models.db import db
from api.models.user import User
from api.models.table import Table
from api.models.order_status import OrderStatus
from api.models.payment_method import PaymentMethod
from datetime import datetime

class Order(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    paid_at = db.Column(db.DateTime)
    ticket_url = db.Column(db.String(120))
    total_price = db.Column(db.Float)
    is_active = db.Column(db.Boolean(), default=True, nullable=False)
    table_id = db.Column(db.Integer, db.ForeignKey("table.id"), nullable=False)
    payment_method_id = db.Column(db.Integer, db.ForeignKey("payment_method.id"), nullable=True)
    company_id = db.Column(db.Integer,db.ForeignKey("company.id"))    
    table = db.relationship(Table)    
    payment_method = db.relationship(PaymentMethod)
    company = db.relationship("Company") 
          

    def __repr__(self):
        return "<Order %r>" % self.id

    def serialize(self):
        return {
            "id": self.id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "paid_at": self.paid_at,
            "ticket_url": self.ticket_url,
            "total_price": self.total_price,
            "is_active": self.is_active,
            "table_id": self.table_id,
            "payment_method_id": self.payment_method_id
        }
