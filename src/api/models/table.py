from api.models.db import db
from api.models.company import Company

class Table(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    qr_url = db.Column(db.String(150))
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"), nullable=False)
    company = db.relationship(Company)

    def __repr__(self):
        return "<Table %r>" % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "qr_url": self.qr_url,
            "company_id": self.company_id
        }
