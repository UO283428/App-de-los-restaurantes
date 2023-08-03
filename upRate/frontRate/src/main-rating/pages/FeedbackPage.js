import Header from '../components/Header';
import Text from '../components/Text';
import './styles/FeedbackPage.css';

const FeedbackPage = () => {

    // Handles form submit event
    const handleSubmit = (evt) => {
        evt.preventDefault();
    };


    return (
        <div className="app">
            <Header />
          <form onSubmit={handleSubmit} className="review-form">
            
            <div 
              className={"rating-container" + ' asking'}>
                <Text 
                  className={"text-content" + ' asking'}
                  content="¿Cuentanos un poco más de tu experiencia?" />
                
                <input
              className={"text-input" + ' asking'}
              type="text"
              placeholder="Escribe tu opinión aquí"
            />

              <input
                type="submit"
                className={"submit-button" + ' asking'}
                value="Enviar respuestas" />
            </div>
          </form>
        </div>
    );
}

export default FeedbackPage;