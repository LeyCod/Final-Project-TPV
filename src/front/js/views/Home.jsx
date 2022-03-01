import React, { useContext } from "react";
import { Context } from "../store/appContext";

// Components
import { Header } from "../component/Header/Header.jsx";
import { Card } from "../component/Card/Card.jsx";
import { Features } from "../component/Features/Features.jsx";
import { Slide } from "../component/Slide/Slide.jsx";
import { Footer } from "../component/Footer/Footer.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid p-0">
      <Header></Header>
      <Slide></Slide>
      <h4 className="text-center">Servicios</h4>
      <div className="row gap-4 justify-content-evenly my-4">
        <div className="col-5 col-md-2 p-0">
          <Card
            title="Servicio1"
            subtitle="Este es uno de los servicios."
            icono="utensils"
          ></Card>
        </div>
        <div className="col-5 col-md-2 p-0">
          <Card
            title="Servicio2"
            subtitle="Este es el segundo servicio."
            icono="utensils"
          ></Card>
        </div>
        <div className="col-5 col-md-2 p-0">
          <Card
            title="Servicio3"
            subtitle="Esto es el tercer servicio."
            icono="utensils"
          ></Card>
        </div>
        <div className="col-5 col-md-2 p-0">
          <Card
            title="Servicio4"
            subtitle="Este es el cuarto servicio."
            icono="utensils"
          ></Card>
        </div>
      </div>
      <div className="offset-5 col-md-5 col-sm-12 ">
        <Features
          title="#Feature1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
          img="https://placeimg.com/640/480/any"
          type={false}
        ></Features>
      </div>
      <div className="col-md-5 col-sm-12">
        <Features
          title="#Feature2"
          text=
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
            img="https://placeimg.com/640/480/tech"
            type={true}
        ></Features>
        
      </div>
      <Footer></Footer>
    </div>
  );
};
