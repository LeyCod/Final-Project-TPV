from api.shared.response import success_response, error_response
from api.models.index import db, Order,OrderItem, User, Table, Company, MenuItem
from flask_jwt_extended import create_access_token
from sqlalchemy import text

def get_all_orders(company_id):
    try:
        list_order = db.session.query(Order).filter(Order.company_id == company_id).all()
        order_list = []
        for order in list_order:
            order_json = order.serialize()
            order_items = db.session.query(OrderItem).filter(OrderItem.order_id == order_json["id"]).all()
            order_json["order_item"] = list(map(lambda item: item.serialize(), order_items))
            order_list.append(order_json)
        return success_response(order_list,200)

    except Exception as error:
        print("Error in get order", error)
        return error_response("Error interno del servidor",500)

def get_order_item(order_id):
    try:
        list_order_item = db.session.query(OrderItem).filter(OrderItem.order_id == order_id)
        order_item_list = []
        for order_item in list_order_item:
            order_item_json = order_item.serialize()
            menu_items = db.session.query(MenuItem).filter(MenuItem.id == order_item_json["id"])
            order_item_json["menu_items"] = list(map(lambda item: item.serialize(), menu_items))
            order_item_list.append(order_item_json)
            return success_response(order_item_list,200)

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