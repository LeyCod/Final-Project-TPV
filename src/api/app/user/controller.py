from api.shared.encrypt_password import encrypt_pass
from api.shared.validate_email import check_email
from api.shared.response import success_response, error_response
from api.models.index import db, User

def register_user(body):
    try:
        if body is None: 
            return error_response("Error interno del servidor. Por favor, inténtalo de nuevo.")

        if "company_id" not in body:
            return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")
        
        if "nif" not in body or len(body["nif"]) == 0:
            return error_response("Debes escribir un NIF.", 400)

        if "name" not in body or len(body["name"]) == 0:
            return error_response("Debes escribir un nombre.", 400)
        
        if "email" not in body or len(body["email"]) == 0:
            return error_response("Debes escribir un email.", 400)

        if check_email(body["email"]) == False:
            return error_response("El email no es válido.", 400)

        if "password" not in body or len(body["password"]) == 0:
            return error_response("Debes escribir una contraseña.", 400)

        if "is_admin" not in body:
            return error_response("Error interno del servidor. Por favor, inténtalo de nuevo.", 400)

        hash_pass = encrypt_pass(body["password"])
        new_user = User(company_id=body["company_id"], is_admin=body["is_admin"], nif=body["nif"], name=body["name"], email=body["email"], password=hash_pass)

        db.session.add(new_user)
        db.session.commit()

        return success_response(new_user.serialize(), 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR REGISTER USER]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")
