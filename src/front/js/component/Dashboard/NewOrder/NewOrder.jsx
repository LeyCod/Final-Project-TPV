import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "./new-order.css";

// Components
import { MenuItemCard } from "../MenuItemCard/MenuItemCard.jsx";
import { NewOrderSummary } from "../NewOrderSummary/NewOrderSummary.jsx";

export const NewOrder = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dashboard-view-content p-2 p-md-3 p-lg-4">
            <div className="row justify-content-start gap-1" id="new-order-wrapper">
                <div className="col-12 col-lg-7">
                    <MenuItemCard title="Cerveza" description="Jarra de cerveza." price="2.50" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647620179/www.cocinayvino.com-cervezas-e1626313339477-1200x900_q8is4f.jpg" />
                    <MenuItemCard title="Tabla de quesos y jamón" description="Jamón ibérico, quesos, frutos secos y pan." price="8.50" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/tabla-de-quesos-y-jamon_rmrazf.jpg" />
                    <MenuItemCard title="Hummus" description="Crema de garbanzos con patatas." price="2.10" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/taberna-el-sur-de-huertas_jkkpxl.jpg" />
                    <MenuItemCard title="Huevos rotos" description="Con jamón o chorizo y patatas." price="7.50" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/taberna-el-sur-de-huertas_1_w48mub.jpg" />
                    <MenuItemCard title="Gambas al ajillo" description="Con gambas, ajo y seguro que algo más." price="7.30" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/taberna-el-sur-de-huertas_3_qhrvm0.jpg" />
                    <MenuItemCard title="Salmorejo" description="Plato típico cordobés." price="6.20" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/taberna-el-sur-de-huertas_2_ziudws.jpg" />
                    <MenuItemCard title="Gambas al pil pil" description="Plato tradicional español con ajo, aceite de oliva y guindilla." price="7.80" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/20181008-182036-largejpg_c2xumg.jpg" />
                    <MenuItemCard title="Croquetas caseras" description="Diferentes recetas tradicionales." price="8" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619493/taberna-el-sur-de-huertas_4_rpbryc.jpg" />
                    <MenuItemCard title="Tarta de queso" description="Con queso y cosas." price="4.20" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619467/humus_uch2xr.jpg" />
                    <MenuItemCard title="Sangría" description="Bebida refrescante con frutas de temporada." price="3.50" image_url="https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/photo0jpg_jjerf5.jpg" />                    
                </div>

                <div className="d-none d-xl-block col-xl-3 flex-grow-1 ps-0">
                    <NewOrderSummary />
                </div>
            </div>
        </div>
    );
};
