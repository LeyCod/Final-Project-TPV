from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.table.controller import register_table, get_all_tables
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

tables = Blueprint("tables", __name__)

@tables.route("/", methods=["GET"])
@jwt_required()
def validate_table():
    user_id = get_jwt_identity()
    tables = get_all_tables(user_id["id"])
    return jsonify(tables), 200

@tables.route("/register", methods=["POST"])
@jwt_required()
def create_table():
    user_id = get_jwt_identity()
    body = request.get_json(force = True)
    return register_table(body, user_id["id"])


@tables.route("/delete", methods=["DELETE"])
def delete_table():
    body = request.get_json(force = True)
    return table_delete(body)

@tables.route("/update", methods=["PUT"])
def update_table():
    body = request.get_json(force = True)
    return table_update(body)