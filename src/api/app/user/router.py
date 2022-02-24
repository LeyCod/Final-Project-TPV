from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.user.controller import register_user

users = Blueprint("users", __name__)

@users.route("/register", methods=["POST"])
def create_user():
    return register_user(request)
