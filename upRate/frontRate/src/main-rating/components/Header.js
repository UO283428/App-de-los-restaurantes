import React, {useEffect, useState, useContext} from "react";
import { UserContext } from "../../UserContext";
import { HeaderContext } from "../../HeaderContext";
import { API_URLS } from "../../config";
import Image from "./Image";
import Logo from "./Logo";
import "./styles/Header.css";

const Header = () => {

  const [frontPageImage, setFrontPageImage] = useState("");//useState("https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg");
  const [logoImage, setLogoImage] = useState("");//useState("https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png");
  const {user, setUser} = useContext(UserContext);
  const {isHeaderAnimated, isHeaderExtended} = useContext(HeaderContext);
  // Get the id from the url subdomain.basedomain.es/id/...
  const id = window.location.pathname.split('/')[1];

  useEffect(() => {
    fetch(API_URLS.frontPageImage(id))
    .then(response => {
        return response.json();
    })
    .then(data => {
        setFrontPageImage(data.frontPageImageUrl);
    })
    .catch(error => {
        console.error("Error fetching front page image:", error);
    });
}, []);

useEffect(() => {
  fetch(API_URLS.logoImage(id))
  .then(response => {
      return response.json();
  })
  .then(data => {
      setLogoImage(data.logoImageUrl);
  })
  .catch(error => {
      console.error("Error fetching front page image:", error);
  });
}, []);


  //Transistion for the header that kicks in when the header is conpact and the animation is on.
    return (
        <>
          <Image
          className={'front-page-image' + (isHeaderAnimated ? ' animated' : '') + (isHeaderExtended ? ' extended' : ' compact')}
          src={frontPageImage} alt="Example Image" />

          <Logo
          className={'logo-image' + (isHeaderAnimated ? ' animated' : '') + (isHeaderExtended ? ' extended' : ' compact')}
          src={logoImage} alt="Example Logo" />
        </>
    );
}

export default Header;