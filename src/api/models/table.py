from api.models.db import db
from api.models.company import Company

class Table(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    outside = db.Column(db.Boolean(), default=False, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    qr_url = db.Column(db.String(120), nullable=True)
    occupied = db.Column(db.Boolean(), default=False, nullable=False)
    is_active = db.Column(db.Boolean(), default=True, nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"), nullable=False)
    company = db.relationship(Company)

    def __repr__(self):
        return "<Table %r>" % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "outside": self.outside,
            "capacity": self.capacity,
            "qr_url": self.qr_url,
            "occupied": self.occupied,
            "is_active": self.is_active,
            "company_id": self.company_id
        }
