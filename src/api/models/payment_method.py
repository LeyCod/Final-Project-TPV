from api.models.db import db

class PaymentMethod(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    is_active = db.Column(db.Boolean(), default=True, nullable=False)

    def __repr__(self):
        return "<PaymentMethod %r>" % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "is_active": self.is_active
        }
