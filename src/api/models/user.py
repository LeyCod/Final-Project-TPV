from api.models.db import db
from api.models.company import Company
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nif = db.Column(db.String(9), unique=True)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    is_admin = db.Column(db.Boolean(), default=False, nullable=False)    
    name = db.Column(db.String(70), nullable=False)
    email = db.Column(db.String(60), unique=True, nullable=False)
    phone = db.Column(db.Integer)
    password = db.Column(db.String(150), nullable=False)
    image_url = db.Column(db.String(120))
    is_active = db.Column(db.Boolean(), default=True, nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"))
    company = db.relationship(Company)

    def __repr__(self):
        return "<User %r>" % self.id

    def serialize(self):
        return {
            "id": self.id,
            "nif": self.nif,
            "created_at": self.created_at,
            "is_admin": self.is_admin,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "image_url": self.image_url,
            "is_active": self.is_active,
            "company_id": self.company_id
        }
