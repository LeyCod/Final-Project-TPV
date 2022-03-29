from api.shared.response import success_response, error_response
from api.models.index import db, PaymentMethod

def get_payment_methods():
    try:
        payment_method = db.session.query(PaymentMethod).filter(PaymentMethod.is_active == True)        

        payment_methods = {}
        for method in payment_method:
            value = method.serialize()            
            payment_methods[value["id"]] = value # Each key of the payment_methods object matches with the id of the payment method
        
        return success_response(payment_methods)

    except Exception as error:
        print("ERROR GET PAYMENT METHODS", error)
        return error_response("Error interno del servidor.")
