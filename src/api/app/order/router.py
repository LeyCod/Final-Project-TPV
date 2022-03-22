from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.order.controller import register_order

orders = Blueprint("orders", __name__)

@orders.route("/register", methods=["POST"])
def create_order():
    body = request.get_json(force = True)
    return register_order(body)
