from api.shared.response import success_response, error_response
from api.models.index import db, Order
import stripe
import os

def set_payment(body):
    try:
        if body is None: 
            return error_response("Solicitud incorrecta", 400)

        if "id" not in body:
            return error_response("Solicitud incorrecta. No se incluye el ID del pedido", 400)        

        if "id_payment" not in body:
            return error_response("Solicitud incorrecta. No se incluye id_payment", 400)
        
        if "amount" not in body or body["amount"] == 0:
            return error_response("Solicitud incorrecta. Error con el campo amount", 400)
        
        charge = stripe.Charge.create(
            amount=body["amount"],
            currency="eur",
            description="Pago del pedido con ID" + body["id"],
            idempotency=body["id"],
            api_key=os.getenv("STRIPE_API_SECRET")
        )

        return success_response("Pedido realizado")

    except stripe.error.StripeError as err:        
        print("[ERROR SET PAYMENT]: ", err)
        return error_response("Error interno del servidor.")
