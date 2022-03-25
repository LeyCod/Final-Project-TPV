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
            subtitle="Mediante los medios tecnológicos agilizamos y promocionamos una mayor efectividad para que tu negocio siempre esté un paso por delante en lo que al mercado se refiere."
            img_src="https://res.cloudinary.com/da5uckicu/image/upload/v1648238675/Innovation_p1apa9.jpg"
          />

          <Card
            title="Nuestra visión"
            subtitle="Ser la herramienta de mayor importancia a la hora de resolver la problemática de los clientes, siendo los aliados tecnológicos de cualquier establecimiento."
            img_src="https://res.cloudinary.com/da5uckicu/image/upload/v1648238485/Wavy_Bus-18_Single-11_rwibfk.jpg"
          />

          <Card
            title="Nuestros valores"
            subtitle="Adaptación, eficiéncia, simplicidad , rapidez y social-friendly. Nuestro compromiso es seguir creciendo para poder seguir el camino de nuestros clientes."
            img_src="https://res.cloudinary.com/da5uckicu/image/upload/v1648154853/Nuestros_valores_sect4f.jpg"
          />
        </div>

        <hr />

        <Features
          title="
          Ahorra tiempo automatizando tarreas."
          text="Mejora la atención al cliente, tus procesos internos y la gestión. MasterGest añade más funcionalidades a tu sistema para aumentar la capacidad de gestión de tu negocio y el crecimiento , siempre adelantandose a  las necesidades de tus clientes. "
          img="https://res.cloudinary.com/da5uckicu/image/upload/v1648239394/restaurant-management-software_mryiye.jpg"
          reverse={false}
        ></Features>

        <hr />

        <Features
          title="Adapta tu establecimiento a la nueva hostelería digital"
          text=
          "MaterGest es el software de hostelería que te facilita adaptarte a los nuevos hábitos de consumo y gestión."
          img="https://res.cloudinary.com/da5uckicu/image/upload/v1648235045/business-people-meeting-in-cafe-3949860-3272567_ajmeo9.png"
          reverse={true}
        ></Features>
      </div>
    </main >
  );
};
