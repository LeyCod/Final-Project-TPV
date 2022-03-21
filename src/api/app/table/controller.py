from api.shared.response import success_response, error_response
from api.models.index import db, Table, Company

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
    