import { useEffect } from "react";
import "./styles/HighRatingPage.css";

const HighRatingPage = ({ setHeaderExtended, setHeaderAnimated }) => {
  useEffect(() => {
    setHeaderExtended(false);
  }, [setHeaderExtended]);

  useEffect(() => {
    setHeaderAnimated(true);
  }, [setHeaderAnimated]);

  return (
    <div className="feedback-container">
        <h1>¡Gracias por tu feedback!</h1>
        <p>¡Nos vemos pronto!</p>
    </div>
  );
}

export default HighRatingPage;