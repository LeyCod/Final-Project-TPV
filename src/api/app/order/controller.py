from api.shared.response import success_response, error_response
from api.models.index import db, Order,OrderItem, User, Table, Company, MenuItem
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

        if "company_id" not in body:
             return error_response("Solicitud incorrecta 2", 400)

        table = Table.query.get(table_id)
        print(table, "table")
        if table is None:
            return error_response("La mesa no existe", 400)
        
        if table.company_id != body["company_id"]:
            return error_response("La compañia no coincide ", 400)
        
       
        
        total_price= 0

        for menu in body["menu_items"]:
            price = menu["quantity"] * menu["price"]
            total_price= total_price + price

        order= db.session.query(Order).filter(Order.table_id== table_id,Order.is_active==True).first()
        print(order, "order")

        if order is None:
            new_order = Order(table_id=table_id,company_id= body["company_id"],total_price=total_price)
            print(new_order)
            db.session.add(new_order)
            db.session.commit()
            print(new_order, "new_order")
            for order_item in body["menu_items"]:
                new_order_item= OrderItem(quantity=order_item["quantity"],order_id=new_order.id,item_id=order_item["menu_item_id"])
                db.session.add(new_order_item)

            db.session.commit()
            return success_response(new_order.serialize())

        else:
            for order_item in body["menu_items"]:
                new_order_item= OrderItem(quantity=order_item["quantity"],order_id=order.id,item_id=order_item["menu_item_id"])
                db.session.add(new_order_item)

            db.session.commit()
            return success_response(order.serialize())


    except Exception as err:
        db.session.rollback()
        print("[ERROR REGISTER ORDER]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde!!!", 500)




        
        
