from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.order.controller import get_order, register_order
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

orders = Blueprint("orders", __name__)

@orders.route("/all/<company_id>", methods=["GET"])
def validate_order(company_id):
    print(company_id)
    return jsonify("Hola",),200

@orders.route("/register", methods=["POST"])
def create_order():
    body = request.get_json(force = True)
    print(body)
    return register_order(body,table_id=body["table_id"])

@orders.route("/<order_id>", methods=["GET"])
def order_update():
    body = request.get_json(force = True)
    return update_order(body, table_id=body["table_id"])


