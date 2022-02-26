from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.user.controller import register_user, login_user

users = Blueprint("users", __name__)

@users.route("/register", methods=["POST"])
def create_user():
    body = request.get_json(force = True)
    return register_user(body)

@users.route("/login", methods=["POST"])
def user_login():
    body = request.get_json(force = True)
    return login_user(body)
