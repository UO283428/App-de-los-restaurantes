import React, { useEffect } from 'react';
import Text from '../components/Text';
import './styles/FeedbackPage.css';

const FeedbackPage = ({ setHeaderExtended, setHeaderAnimated }) => {
  useEffect(() => {
    setHeaderExtended(false);
  }, [setHeaderExtended]);

  useEffect(() => {
    setHeaderAnimated(false);
  }, [setHeaderAnimated]);

    // Handles form submit event
    const handleSubmit = (evt) => {
        evt.preventDefault();
    };


    return (
          <form onSubmit={handleSubmit} className="review-form">
            <div
              className={"asking"}>
                <Text
                  className={"question"}
                  content="¿Cuentanos un poco más de tu experiencia?" />
                <input
                  className={"text-input"}
                  type="text"
                  placeholder="Escribe tu opinión aquí"
                />
                <input
                  type="submit"
                  className={"submit-button"}
                  value="Enviar respuestas" />
            </div>
          </form>
    );
}

export default FeedbackPage;