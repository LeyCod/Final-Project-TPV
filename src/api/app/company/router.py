from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.company.controller import register_company

companys = Blueprint("companys", __name__)

@companys.route("/register", methods=["POST"])
def create_company():
    body = request.get_json()
    return register_company(body)
