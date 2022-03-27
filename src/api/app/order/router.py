from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.order.controller import get_all_orders, get_order_item, register_order, get_order_by_table
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

orders = Blueprint("orders", __name__)

@orders.route("/all/<company_id>", methods=["GET"])
def validate_order(company_id):    
    return get_all_orders (company_id)

@orders.route("/<order_id>", methods=["GET"])
def validate_order_item(order_id):
    return get_order_item(order_id)

@orders.route("/table/<table_id>", methods=["GET"])
def get_order(table_id):
    return get_order_by_table(table_id)

@orders.route("/register", methods=["POST"])
def create_order():
    body = request.get_json(force = True)    
    return register_order(body, table_id=body["table_id"])
