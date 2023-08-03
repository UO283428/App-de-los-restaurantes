import React from "react";
import Image from "./Image";
import Logo from "./Logo";
import "./styles/Header.css";

const Header = ( extended ) => {

    return (
        <div className={"header-container" + (extended ? ' extended' : 'compact')}>
        <Image 
          className= {'front-page-image' } 
          src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />
        
        <Logo 
          className={"logo-image"} 
          src="https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png" alt="Example Logo" />
        </div>
    );
}

export default Header;