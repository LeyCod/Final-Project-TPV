from api.shared.encrypt_password import encrypt_pass
from api.shared.validate_email import check_email
from api.shared.response import success_response, error_response
from api.models.index import db, Company, User

def register_company(body):
    try:
        if body is None: 
            return error_response("Error interno del servidor. Por favor, inténtalo de nuevo.")

        if "name" not in body or len(body["name"]) == 0:
            return error_response("Debes escribir un nombre.", 400)

        if "cif" not in body or len(body["cif"]) == 0:
            return error_response("Debes escribir el CIF.", 400)

        new_company = Company(name=body["name"], cif=body["cif"])

        db.session.add(new_company)
        db.session.commit()

        return success_response(new_company.serialize(), 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR REGISTER COMPANY]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")

def company_get(user_id):
    
    try:
        user = User.query.get(user_id)
        if user is None:
          return error_response("El usuario no existe", 404)
        if user.is_admin == False:
            return error_response("No autorizado", 401)
        company = Company.query.get(user.company_id)
        if company is None:
          return error_response("La compania  no existe", 404)
        return success_response(company.serialize(),200)

    except Exception as err:
        print("[ERROR GET COMPANY]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")

def update_company(body, user_id):
    try:
        user = User.query.get(user_id)
        if user is None:
            return error_response("El usuario no existe", 404)
        if user.is_admin == False:
            return error_response("No autorizado", 401)

        update_company = Company.query.filter(Company.id == body["id"]).update(dict(body))
        db.session.commit() 
        
        return success_response("Los datos se han actualizado")
        

    except Exception as err:
        db.session.rollback()
        print("[ERROR UPDATE COMPANY]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")


   
