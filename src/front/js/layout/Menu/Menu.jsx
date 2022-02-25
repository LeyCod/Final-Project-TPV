import React from "react";
import "../../../assets/css/menu.css";

 export const Menu = () => {
    return (
        
            <nav id="menu"  className="navbar-menu navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid" href="#">
                  <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                   Image
                   </div>
                   <br/>
                <div  className="container-fluid">
                  <a className="navbar-brand-menu1" href="#">Tab</a>
                </div>
                <div  className="container-fluid">
                  <a className="navbar-brand-menu2" href="#">Tab</a>
                </div>
                <div  className="container-fluid">
                  <a className="navbar-brand-menu3" href="#">Tab</a>
                </div>
            </nav>
    
        
    );
};
