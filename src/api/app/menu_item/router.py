from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.menu_item.controller import register_menu_item

menu_items = Blueprint("menu_items", __name__)

@menu_items.route("/register", methods=["POST"])
def create_menu_item():
    body = request.get_json(force = True)
    return register_menu_item(body)
