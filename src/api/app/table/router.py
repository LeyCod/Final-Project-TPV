from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.table.controller import get_table

tables = Blueprint("tables", __name__)

@tables.route("/<id>", methods=["GET"])
def table_get(id):
    return get_table(id)
