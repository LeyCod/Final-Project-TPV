import React from "react";

// Styles
import "./landing-page.css";

// Components
import { Slide } from "../../component/LandingPage/Slide/Slide.jsx";
import { Card } from "../../component/LandingPage/Card/Card.jsx";
import { Features } from "../../component/LandingPage/Features/Features.jsx";

export const LandingPage = () => {
  return (
    <main id="landing-page-wrapper">
      <Slide />

      <div className="container">
        <div className="row flex-column flex-md-row gap-3 gap-md-0 my-5 py-3 pb-4">
          <h2 className="mb-3 text-center">Nuestros servicios de gestión</h2>

          <Card
            title="Nuestra misión"
            subtitle="Mediante los medios tecnológicos agilizamos y promocionamos una mayor efectividad para los negocios."
            img="https://3seis.com/wp-content/uploads/1_diseno_web_3.png"
          />

          <Card
            title="Nuestra visión"
            subtitle="Ser la herramienta de mayor importancia a la hora de resolver la problemática de los clientes, siendo los aliados tecnológicos de cualquier establecimiento."
           icono="fa-solid fa-eye"
          />

          <Card
            title="Nuestros valores"
            subtitle="Adaptación, eficiéncia, simplicidad , rapidez y social-friendly. Nuestro compromiso es seguir creciendo para poder seguir el camino de nuestros clientes."
            icono="fa-solid fa-gem"
          />
        </div>

        <hr />

        <Features
          title="
          Ahorra tiempo automatizando tarreas."
          text="Mejora la atención al cliente, tus procesos internos y la gestión. MasterGest añade más funcionalidades a tu sistema para aumentar la capacidad de gestión de tu negocio"
          img="https://3seis.com/wp-content/uploads/1_diseno_web_3.png"
          reverse={false}
        ></Features>

        <hr />

        <Features
          title="#Feature2"
          text=
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
          img="https://3seis.com/wp-content/uploads/2_diseno_web_1.png"
          reverse={true}
        ></Features>
      </div>
    </main >
  );
};
