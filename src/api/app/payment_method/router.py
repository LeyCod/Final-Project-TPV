from flask import Flask, Blueprint
from api.app.payment_method.controller import get_payment_methods

payment_methods = Blueprint("payment_methods", __name__)

@payment_methods.route("/", methods=["GET"])
def get_menu():
    print("aqui")
    return get_payment_methods()
