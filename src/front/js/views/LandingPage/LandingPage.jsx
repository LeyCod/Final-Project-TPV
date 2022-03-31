import React from "react";

// Styles
import "./landing-page.css";

// Components
import { Header } from "../../component/LandingPage/Header/Header.jsx";
import { Footer } from "../../component/LandingPage/Footer/Footer.jsx";
import { Card } from "../../component/LandingPage/Card/Card.jsx";
import { Features } from "../../component/LandingPage/Features/Features.jsx";

export const LandingPage = () => {
  return (
    <div id="landing-page-wrapper">
      <Header />

      <div className="container">
        <div className="row flex-column flex-lg-row gap-3 gap-md-0 gap-4 m-auto mt-2 pt-5">
          <h2 className="mb-5 text-center"><strong>Nuestros servicios</strong> de gestión</h2>

          <Card
            title="Nuestra misión"
            subtitle="Mediante los medios tecnológicos agilizamos y promocionamos una mayor efectividad para que tu negocio siempre esté un paso por delante en lo que al mercado se refiere."
            img_src="https://res.cloudinary.com/dxbcvuacb/image/upload/v1648664682/icon-2_ixnuhu.png"
          />

          <Card
            title="Nuestra visión"
            subtitle="Ser la herramienta de mayor importancia a la hora de resolver la problemática de los clientes, siendo los aliados tecnológicos de cualquier establecimiento."
            img_src="https://res.cloudinary.com/dxbcvuacb/image/upload/v1648664682/icon-1_bqulbh.png"
          />

          <Card
            title="Nuestros valores"
            subtitle="Adaptación, eficiéncia, simplicidad, rapidez y social-friendly. Nuestro compromiso es seguir creciendo para poder seguir el camino de nuestros clientes."
            img_src="https://res.cloudinary.com/dxbcvuacb/image/upload/v1648664682/icon-3_pxtbdc.png"
          />
        </div>
      </div>

      <div className="container-fluid bg-custom-gray py-1">
        <div className="container">
          <Features
            title="Ahorra tiempo automatizando tareas"
            text="Mejora la atención al cliente, tus procesos internos y la gestión. MasterGest añade más funcionalidades a tu sistema para aumentar la capacidad de gestión de tu negocio y el crecimiento, siempre adelantandose a  las necesidades de tus clientes. "
            img="https://res.cloudinary.com/da5uckicu/image/upload/v1648239394/restaurant-management-software_mryiye.jpg"
            reverse={false}
          ></Features>
        </div>
      </div>

      <div className="container">
        <Features
          title="Adapta tu establecimiento a la nueva hostelería digital"
          text=
          "MaterGest es el software de hostelería que te facilita adaptarte a los nuevos hábitos de consumo y gestión."
          img="https://res.cloudinary.com/da5uckicu/image/upload/v1648235045/business-people-meeting-in-cafe-3949860-3272567_ajmeo9.png"
          reverse={true}
        ></Features>
      </div>

      <Footer />
    </div >
  );
};
