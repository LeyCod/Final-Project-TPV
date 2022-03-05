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
    user = User.query.get(user_id)
    try:
        if user is None:
          return None
        company = Company.query.get(user.company_id)
        if company is None:
          return None
        return success_response(company.serialize(),200)

    except Exception as err:
        print("[ERROR GET COMPANY]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")

def update_company(body):
    try:
        if body is None:
            return error_response("Error interno del servidor.Por favor,intentalo de nuevo.")
        update_company = Company.query.filter(Company.id == body["company_id"] ).update(dict(body))
        db.session.commit() 
        
        return succes_response("Información actualizada correctamente", 201)

    except Excepcion as err:
        db.session.rollback()
        print("[ERROR UPDATE COMPANY]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")


   
