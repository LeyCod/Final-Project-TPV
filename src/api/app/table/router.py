from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.table.controller import register_table

tables = Blueprint("tables", __name__)

@tables.route("/register", methods=["POST"])
def create_table():
    body = request.get_json(force = True)
    return register_table(body)
