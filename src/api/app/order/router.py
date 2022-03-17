from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.order.controller import get_order, register_order
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

orders = Blueprint("orders", __name__)

@orders.route("/", methods=["GET"])
def validate_order():
    return jsonify("Hola",),200

@orders.route("/register", methods=["POST"])
def create_order():
    body = request.get_json(force = True)
    return register_order(body,table_id=body["table_id"])

@orders.route("/update", methods=["PUT"])
def order_update():
    body = request.get_json(force = True)
    return update_order(body)


