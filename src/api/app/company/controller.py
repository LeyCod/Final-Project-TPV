from api.shared.encrypt_password import encrypt_pass
from api.shared.validate_email import check_email
from api.shared.response import success_response, error_response
from api.models.index import db, Company, User

def register_company(body):
    try:
        if body is None: 
            return error_response("Solicitud incorrecta", 400)

        new_company = Company(name=body["name"].upper(), cif=body["cif"].upper())

        db.session.add(new_company)
        db.session.commit()

        return success_response(new_company.serialize(), 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR REGISTER COMPANY]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")

def get_company(token):
    try:
        user = User.query.get(token)

        if user is None:
            return error_response("Usuario no encontrado", 404)
        
        company = Company.query.get(user.company_id)

        if company is None:
            return error_response("Compañía no encontrada", 404)

        return success_response(company.serialize())

    except Exception as err:
        print("[ERROR GET COMPANY]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")

def update_company(body, user_id):
    try:
        user = User.query.get(user_id)
        if user is None:
            return error_response("Usuario no encontrado", 404)

        if user.is_admin == False:
            return error_response("Acceso no autorizado", 401)

        if "id" not in body:
            return error_response("No se ha recibido ningún ID de empresa", 400)           

        update_company = Company.query.filter(Company.id == body["id"]).update(dict(body))
        db.session.commit() 
        
        return success_response("Los datos se han actualizado correctamente")        

    except Exception as err:
        db.session.rollback()
        print("[ERROR UPDATE COMPANY]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")