from api.models.db import db
from api.models.menu_item import MenuItem
from api.models.order import Order

class OrderItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer, nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey("menu_item.id"), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey("order.id"), nullable=False)
    item = db.relationship(MenuItem, backref="menu_item")    
    order = db.relationship("Order")    

    def __repr__(self):
        return "<OrderItem %r>" % self.id

    def serialize(self):
        return {
            "id": self.id,
            "quantity": self.quantity,
            "item_id": self.item_id,
            "menu_item": self.menu_item.serialize()
        }

    def to_json():
        return {
            "id": self.id,
            "quantity": self.quantity,
            "item_id": self.item_id,
            "order_id": self.order_id,
            "menu_item": self.menu_item.serialize()
        }
