import React, { useContext } from "react";
import { Context } from "../store/appContext";


// Components
import { Card } from "../component/Card/Card.jsx";
import { Features } from "../component/Features/Features.jsx";
import { Menu } from "../component/Menu/Menu.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
      <Menu></Menu>
      <h4 id="services">Services</h4>
      <div className="d-flex col-sm-12 col-lg-2 col-xl-2">
          
        <Card
          nameClass={"service1"}
          title={"Card1"}
          message={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
          }
        ></Card>
        <Card
          nameClass={"service2"}
          title={"Card2"}
          message={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
          }
        ></Card>
        <Card
          nameClass={"service3"}
          title={"Card3"}
          message={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
          }
        ></Card>
        <Card
          nameClass={"service4"}
          title={"Card4"}
          message={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
          }
        ></Card>
      </div>
      <div className="offset-5 col-md-5 col-sm-12">
        <Features
          id={1}
          title={"#Feature1"}
          message={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
          }
        ></Features>
      </div>
      <div className="col-5">
        <Features
          id={2}
          title={"#Feature2"}
          message={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis pretium ipsum ac molestie. Aliquam dapibus feugiat faucibus. Vestibulum accumsan."
          }
        ></Features>
      </div>
    </>
		
	);
};

