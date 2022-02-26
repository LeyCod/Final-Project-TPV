from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.user.controller import register_user, login_user, validate_user, delete_user
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

users = Blueprint("users", __name__)

@users.route("/register", methods=["POST"])
def create_user():
    body = request.get_json(force = True)
    return register_user(body)

@users.route("/login", methods=["POST"])
def user_login():
    body = request.get_json(force = True)
    return login_user(body)

@users.route("/validate", methods=["GET"])
@jwt_required()
def user_validate():
    user_id = get_jwt_identity()
    return validate_user(user_id["id"])

@users.route("/delete", methods=["DELETE"])
def user_delete():
    body = request.get_json(force = True)
    return delete_user(body)

@users.route("/update", methods=["PUT"])
def user_update():
    body = request.get_json(force = True)
    return update_user(body)
