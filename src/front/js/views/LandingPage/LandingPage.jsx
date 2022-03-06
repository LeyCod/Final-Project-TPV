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
            title="Servicio1"
            subtitle="Este es uno de los servicios."
            icono="utensils"
          />

          <Card
            title="Servicio2"
            subtitle="Este es el segundo servicio."
            icono="utensils"
          />

          <Card
            title="Servicio3"
            subtitle="Esto es el tercer servicio."
            icono="utensils"
          />
        </div>

        <hr />

        <Features
          title="#Feature1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
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
