from api.shared.response import success_response, error_response
from api.models.index import db, Order, User, Table, Company
from flask_jwt_extended import create_access_token

def get_order():
    try:

        order = db.session.query(Order)
        
        return success_response("HOLA",200)

    except Exception as error:
        print("Error in get order", error)
        return error_response("Error interno del servidor",500)

def register_order(body, table_id):
    try:
        if body is None:
            return error_response("Solicitud incorrecta", 400)

        table = Table.query.get(table_id)
        

        if "table_id" not in body:
             return error_response("Solicitud incorrecta", 400)
        user = User.query.get(user_id)
        company_id = user.company_id
        print(user_id.serialize())

        if "company_id" not in body:
            return error_response("Solicitud incorrecta", 400)

        for order in order_items:
         order_items = [{
            menu_item_id,
            price
        }]
        return success_response(order_items)


       

        new_order = Order(table=table_id,company_id=user.company_id)

        db.session.add(new_order)
        db.session.commit()

        return success_response(new_order.serialize(), 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR REGISTER ORDER]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")