from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.table.controller import register_table

tables = Blueprint("tables", __name__)

@tables.route("/validate", methods=["GET"])
@jwt_required()
def validate_table():
    table_id = get_jwt_identity()
    return table_validate(table_id["id"])

@tables.route("/register", methods=["POST"])
def create_table():
    body = request.get_json(force = True)
    return register_table(body)

@tables.route("/delete", methods=["DELETE"])
def delete_table():
    body = request.get_json(force = True)
    return table_delete(body)

@tables.route("/update", methods=["PUT"])
def update_table():
    body = request.get_json(force = True)
    return table_update(body)