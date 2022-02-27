from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.order_item.controller import register_order_item

order_items = Blueprint("order_items", __name__)

@order_items.route("/register", methods=["POST"])
def create_table():
    body = request.get_json(force = True)
    return register_order_item(body)
