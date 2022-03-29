from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.stripe.controller import set_payment

stripes = Blueprint("stripes", __name__)

@stripes.route("/payment/card", methods=["POST"])
def payment():
    body = request.get_json(force = True)
    return set_payment(body)
    
