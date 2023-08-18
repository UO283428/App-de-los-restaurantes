import React from "react";
import Image from "./Image";
import Logo from "./Logo";
import "./styles/Header.css";

const Header = ({extended, animated}) => {

  //Transistion for the header that kicks in when the header is conpact and the animation is on.
    return (
        <>
          <Image
          className={'front-page-image' + (animated ? ' animated' : '') + (extended ? ' extended' : ' compact')}
          src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />
          <Logo
          className={'logo-image' + (animated ? ' animated' : '') + (extended ? ' extended' : ' compact')}
          src="https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png" alt="Example Logo" />
        </>
    );
}

export default Header;