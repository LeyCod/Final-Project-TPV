from api.shared.encrypt_password import encrypt_pass
from api.shared.validate_email import check_email
from api.shared.response import success_response, error_response
from api.models.index import db, Company

def register_company(body):
    try:
        if body is None: 
            return error_response("Error interno del servidor. Por favor, inténtalo de nuevo.")

        new_company = Company(name=body["name"].upper(), cif=body["cif"].upper())

        db.session.add(new_company)
        db.session.commit()

        return success_response(new_company.serialize(), 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR REGISTER COMPANY]: ", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")
