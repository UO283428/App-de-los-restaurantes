import { useEffect, useContext } from "react";
import { HeaderContext } from "../../HeaderContext";
import "./styles/HighRatingPage.css";

const HighRatingPage = () => {
  
  const {setHeaderAnimated, setHeaderExtended} = useContext(HeaderContext);

  useEffect(() => {
    setHeaderExtended(false);
    setHeaderAnimated(true);
  }, []);

  return (
    <div className="feedback-container">
        <h1>¡Gracias por tu feedback!</h1>
        <p>¡Nos vemos pronto!</p>
    </div>
  );
}

export default HighRatingPage;