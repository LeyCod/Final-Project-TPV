from api.models.db import db

class OrderStatus(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return "<OrderStatus %r>" % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
