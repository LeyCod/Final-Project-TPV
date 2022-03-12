from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.menu_item.controller import get_menu_item, register_menu_item, update_menu_item, delete_menu_item
from flask_jwt_extended import jwt_required

menu_items = Blueprint("menu_items", __name__)

@menu_items.route("/<company_id>", methods=["GET"])
def get_menu(company_id):
    return get_menu_item(company_id)




    

@menu_items.route("/register", methods=["POST"])
@jwt_required()
def create_menu_item():
    body = request.get_json(force = True)
    return register_menu_item(body)

@menu_items.route("/update", methods=["PUT"])
def menu_item_update():
    body = request.get_json(force=True)
    return update_menu_item(body)

@menu_items.route("/delete", methods=["DELETE"])
@jwt_required()
def menu_item_delete():
    body = request.get_json(force=True)
    user_id = get_jwt_identity()
    return delete_menu_item(body, user_id["is_admin"])



