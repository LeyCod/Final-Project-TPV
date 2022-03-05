from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.company.controller import register_company, company_get
from flask_jwt_extended import get_jwt_identity 
from flask_jwt_extended import jwt_required 


companys = Blueprint("companys", __name__)

@companys.route("/register", methods=["POST"])
def create_company():
    body = request.get_json(force = True)
    return register_company(body)

@companys.route("/", methods=["GET"])
@jwt_required()
def get_company():
    user_id = get_jwt_identity()
    print (user_id)
    return jsonify("Hola"),200

@companys.route("/", methods=["PUT"])
def company_update():
    body = request.get_json(force = True)
    return update_company(body)
