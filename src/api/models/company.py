from api.models.db import db
from datetime import datetime

class Company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    name = db.Column(db.String(70), nullable=False)
    cif = db.Column(db.String(9), unique=True, nullable=False)
    description = db.Column(db.String(280))
    address = db.Column(db.String(70))
    province = db.Column(db.Integer)
    postal_code = db.Column(db.Integer)    
    external_url = db.Column(db.String(120))
    logo_url = db.Column(db.String(120))
    is_active = db.Column(db.Boolean(), default=True, nullable=False)

    def __repr__(self):
        return "<Company %r>" % self.id

    def serialize(self):
        return {
            "id": self.id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "name": self.name,
            "cif": self.cif,
            "is_active": self.is_active
        }