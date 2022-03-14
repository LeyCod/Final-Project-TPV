from api.shared.response import success_response, error_response
from api.models.index import db, MenuItem, User
from flask_jwt_extended import create_access_token

def get_menu_item(company_id):
    try:
        
        menu_item = db.session.query(MenuItem).filter(MenuItem.company_id == company_id)
        list_menu_item = []
        for menu in menu_item:
            list_menu_item.append(menu.serialize())
        return success_response(list_menu_item)

    except Exception as error:
        print("Error in get menu_item", error)
        return error_response("Internal server error")


def register_menu_item(body):
    try:
        if body is None:
            return error_response("Solicitud incorrecta", 400)

        if "name" not in body or len(body["name"]) == 0:
            return error_response("", 400)

        if body["company_id"] is None:
            return error_response("Solicitud incorrecta", 400)

        if body["price"]is None:
            return error_response("Solicitud incorrecta", 400)

        if body["price"]  == 0:
            return error_response("Solicitud incorrecta", 400)

        user = user.query.get(user_id)
        company_id = user.query.get(user_id)

        if user is None:
            return error_response("No estas autorizado", 401)

        if "is_admin" not in  body:
            return error_response("No estas autorizado", 401)

        
        new_menu_item = MenuItem(name=body["name"],price=body["price"], company_id=body["user.company_id"],is_admin=body["is_admin"])

        db.session.add(new_menu_item)
        db.session.commit()

        return success_response(new_menu_item.serialize(),201)
    except Exception as err:
        db.session.rollback()
        print("[ERROR REGISTER MENU_ITEM]:",err)
        return error_response("Hola", 500)

def update_menu_item(body):
    try:
        if body is None:
            return error_response("Solicitud incorrecta", 400)

        update_menu_item = MenuItem.query.filter(MenuItem.name == body["name"]).update(dict(body))
        db.session.commit()

        return success_response("Información actualizada correctamente", 201)

    except Exception as err:
        db.session.rollback()
        print("[ERRPR UPDATE MENU_ITEM]", err)
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")

def delete_menu_item(body):
    try:
        user_id = User.query.get(token)
        if body is None:
            return error_response("Solicitud incorrecta", 400)

        delete_menu_item = MenuItem.query.filter((MenuItem.name == body["name"]) & (MenuItem.price == False))

        if delete_menu_item is None:
            return error_response("Menu_Item no encontrado", 400)

        if body["is_admin"] is False:
            return error_response("No tienes permiso", 400)

        

        db.session.delete(delete_menu_item)
        db.session.commit()

        return success_response("Menu_Item eliminado correctamente", 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR DELETE MENU_ITEM]:", err )
        return error_response("Error interno del servidor. Por favor, inténtalo más tarde.")