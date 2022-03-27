from api.shared.response import success_response, error_response
from api.models.index import db, Table, User, Order
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

def get_all_tables(user_id):
    try:
        user = User.query.get(user_id)
        if user is None: 
            return error_response("User not exist", 401)
        tables = db.session.query(Table).filter(Table.company_id == user.company_id)
        list_tables = []
        for table in tables: 
            list_tables.append(table.serialize())
        return list_tables
        
    except Exception as error: 
        print ("Error in get tables", error)
        return error_response("internal server error")

def get_table(id):
    try:
        table = Table.query.filter(Table.id == id).first()

        if table is None:
            return error_response("Mesa no encontrada", 404)

        company = Company.query.filter(Company.id == table.company_id).first()

        if company is None:
            return error_response("Empresa no encontrada", 404)

        table_data = table.serialize()
        table_data["company_description"] = company.description

        return success_response(table_data)

    except Exception as error:
        print("Error in get_table", error)
        return error_response("Error interno del servidor")

def register_table(body, user_id):
    try: 
        if body is None: 
            return error_response("Solicitud incorrecta", 400)

        if "name" not in body or len(body["name"]) == 0:
            return error_response("Debes escribir un nombre.", 400)
        
        if "capacity" not in body:
            return error_response("Debes escribir una capacidad.", 400)

        user = User.query.get(user_id)
        if user is None or user.is_admin == False :
            return error_response("No tienes autorizacion", 401)

        new_table = Table(company_id=user.company_id, name=body["name"])
        db.session.add(new_table)
        db.session.commit()

        return success_response(new_table.serialize(), 201)

    except Exception as err: 
        db.session.rollback()
        print("[ERROR REGISTER TABLE]: ", err)
        return error_response("Solicitud incorrecta", 500)

def table_delete(body, user_id):
    try:
        if body is None: 
            return error_response("Solicitud incorrecta", 400)
        
        user = User.query.get(user_id)
        if user is None or user.is_admin == False :
            return error_response("No tienes autorizacion", 401)
        
        check_order = Order.query.filter((Oder.table_id == body["id"])).first()
        if check_order is not None:
            return error_response("Esta mesa tiene un pedido asignado", 400)

        table_delete = Table.query.filter((Table.id == body["id"])).first()

        if table_delete is None:
            return error_response("Mesa no encontrada", 400)

        db.session.delete(table_delete)
        db.session.commit()

        return success_response("Mesa eliminada correctamente", 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR DELETE TABLE]: ", err)
        return error_response("Solicitud incorrecta", 400)

def table_update(body, user_id):
    try:
        if body is None: 
            return error_response("Solicitud incorrecta", 400)

        if "id" not in body:
            return error_response("ID de mesa no encontrado en la petición.", 400)

        user = User.query.get(user_id)
        if user is None:
            return error_response("No estas autorizado", 401)

        table_update = Table.query.filter(Table.id == body["id"]).update(dict(body))
        db.session.commit()

        return success_response("Información actualizada correctamente", 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR UPDATE TABLE]: ", err)
        return error_response("Solicitud incorrecta3", 400) 