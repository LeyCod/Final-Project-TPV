from api.shared.encrypt_password import encrypt_pass
from api.shared.validate_email import check_email
from api.shared.response import success_response, error_response
from api.models.index import db, Company

def register_company(request):
    try:
        body = request.get_json()

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
