from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.menu_item.controller import register_menu_item, update_menu_item, delete_menu_item
from flask_jwt_extended import jwt_required

menu_items = Blueprint("menu_items", __name__)

@menu_items.route("/", methods=["GET"])
def get_menu_item():
    pass
    

@menu_items.route("/register", methods=["POST"])
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
    return delete_menu_item(body, user_id["id"])



