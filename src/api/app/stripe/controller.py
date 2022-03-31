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

        if "description" not in body:
            return error_response("Solicitud incorrecta. No se incluye la descripción de la transacción", 400)

        if "id_payment" not in body:
            return error_response("Solicitud incorrecta. No se incluye id_payment", 400)
        
        if "amount" not in body or body["amount"] == 0:
            return error_response("Solicitud incorrecta. Error con el campo amount", 400)
        
        charge = stripe.Charge.create(
            amount=body["amount"],
            currency="eur",
            description=body["description"],
            source="tok_visa",
            idempotency_key=body["id_payment"],
            api_key=os.getenv("STRIPE_API_SECRET")
        )
        
        update_order = Order.query.filter(Order.id == body["id"]).update({"is_active": False, "payment_method_id": 2})
        db.session.commit()

        return success_response({"data": charge})

    except stripe.error.StripeError as err:        
        print("[ERROR SET PAYMENT]: ", err)
        return error_response("Error interno del servidor.")
