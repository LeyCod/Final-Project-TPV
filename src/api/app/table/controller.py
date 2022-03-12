from api.shared.response import success_response, error_response
from api.models.index import db, Table, User
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

def get_all_tables(user_id):
    try:
        user = User.query.get(user_id)
        if user is None: 
            return error_response("User not exist", 401)
        tables = db.query(Table).filter(Table.company_id == user.company_id)
        print(Table)
        
    except Exception as error: 
        print ("Error in get tables", error)
        return error_response("internal server error")

def register_table(body):
    try: 
        if body is None: 
            return error_response("Solicitud incorrecta", 400)

        if "name" not in body or len(body["name"]) == 0:
            return error_response("Debes escribir un nombre.", 400)

        if "outside" in body :
            outside = body["outside"]
        
        if "capacity" not in body or len(body["capacity"]) == 0:
            return error_response("Debes escribir una capacidad.", 400)

        if "company_id" not in body:
            return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")

        new_table = Table(company_id=body["company_id"], is_admin=body["is_admin"], name=body["name"])
        db.session.add(new_table)
        db.session.commit()

        return success_response(new_user.serialize(), 201)

    except Exception as err: 
        db.session.rollback()
        print("[ERROR REGISTER USER]: ", err)
        return error_response("Solicitud incorrecta", 400)

def delete_table(body):
    try:
        if body is None: 
            return error_response("Error interno del servidor. Por favor, inténtalo de nuevo.")
        
        delete_user = User.query.filter((User.id == body["id"]) & (User.is_admin == False)).first()

        if delete_user is None:
                return error_response("Usuario no encontrado", 400)
        
        db.session.delete(delete_user)
        db.session.commit()

        return success_response("Usuario eliminado correctamente", 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR DELETE USER]: ", err)
        return error_response("Solicitud incorrecta", 400)

def update_table(body):
    try:
        if body is None: 
            return error_response("Error interno del servidor. Por favor, inténtalo de nuevo.")
        
        update_user = User.query.filter(User.id == body["id"]).update(dict(body))
        db.session.commit()

        return success_response("Información actualizada correctamente", 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR UPDATE USER]: ", err)
        return error_response("Solicitud incorrecta", 400)