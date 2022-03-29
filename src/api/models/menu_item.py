from api.models.db import db
from api.models.company import Company

class MenuItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60), nullable=False)
    description = db.Column(db.String(280))
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(150))
    is_active = db.Column(db.Boolean(), default=True, nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"), nullable=False)
    company = db.relationship(Company)    

    def __repr__(self):
        return "<MenuItem %r>" % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name.title(),
            "description": self.description,
            "price": self.price,
            "image_url": self.image_url,
            "is_active": self.is_active,
            "company_id": self.company_id
        }
