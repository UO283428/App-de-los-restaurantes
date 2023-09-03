import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { UserContext } from "../../UserContext";
import Text from "../components/Text";
import { URLSNAV } from "../constants/urls";
import { API_URLS } from "../../config";
import "./styles/LowRatingPage.css";
import RatingQuestion from "../components/RatingQuestion";
import { HeaderContext } from "../../HeaderContext";

// Rating Component
const LowRatingPage = () => {

  const {setHeaderAnimated, setHeaderExtended} = useContext(HeaderContext);

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);

  // Get the id from the url subdomain.basedomain.es/id/...
  const { id } = useParams();

  // State definition
  const [questions, setQuestions] = useState([{
        id: "none",
        content: "none",
        rating: 0,
        show: false,
    }]);
  const [isLoading, setIsLoading] = useState(true);
  const questionReferences = React.useRef([]);

  // Animation fade-in fade-out
  useEffect(() => {
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => ({
        ...question,
        show: false,
      }));
    });

    const timer = setTimeout(() => {
      setQuestions(prevQuestions => {
        return prevQuestions.map(question => ({
          ...question,
          show: true,
        }));
      });
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  // fetching the questions from the API
  useEffect(() => {
    fetch(API_URLS.questions(id))
    .then(response => response.json())
    .then(data => {
        const fetchedQuestions = data.questions.map(question => ({
            id: question.id,
            content: question.content,
            rating: 0,
            show: false,
        }));
        setQuestions(fetchedQuestions);
        setIsLoading(false);
        console.log("fetched questions: ", fetchedQuestions);
    })
    .catch(error => {
        console.error("Error fetching questions:", error);
        setIsLoading(false);
    });
  }, []);

  // Handles form submit event
  const handleSubmit = (evt) => {
    let ret = false;
    evt.preventDefault();
    // Iterate over the questions and check if any of them has a rating of 0
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        if (question.rating === 0) {
          question.errorMessage = "Por favor, selecciona al menos una estrella.";
          ret = true;
        } else {
          question.errorMessage = "";
        }
        return question;
      });
    });


    if (ret) {
      return;
    }
    goToNextPage();
  };

  // Sets the rating value
  const setRatingQ = (question) => (rating) => {
    question.rating = rating;
  }

  // Changes UI elements based on the rating value
  const goToNextPage = () => {
    setUser({
      ...user,
      lastPage: URLSNAV.LOW_RATING(id),
    });

    setQuestions(prevQuestions => {
      return prevQuestions.map(question => ({
        ...question,
        show: false,
      }));
    });

    // wait for animation to finish and then navigate
    setTimeout(() => {
      navigate(URLSNAV.FEEDBACK(id));
    }, 250);
  };

  const btnReference = React.createRef();

 return (
<form onSubmit={handleSubmit} className="review-form">
  {isLoading ? (
    <div className="loading">
      <Text className="loading-text" text="Cargando..." />
    </div>
  ) : (
    <>
      {questions.map((question, index) => {
        const questionReference = React.createRef(); // Create a ref

        // Store the ref in the array for each question
        questionReferences.current[index] = questionReference;

        return (
          <CSSTransition
            key={question.id}
            in={question.show}
            timeout={300}
            classNames="rating-container-animation"
            nodeRef={questionReference}
            unmountOnExit
          >
            <div ref={questionReference} className={"rating-container"}>
              <RatingQuestion
                mainText={question.content}
                setRating={setRatingQ(question)}
              />
              
              {(question.errorMessage != "") && (
                <div className="error-message">{question.errorMessage}</div>
              )}
            </div>
          </CSSTransition>
        );
      })}
      <CSSTransition
        key={"submit"}
        in={questions[0].show}
        timeout={300}
        classNames="rating-container-animation"
        nodeRef={btnReference}
        unmountOnExit
      >
        <div ref={btnReference} className={"rating-container"}>
          <input
            type="submit"
            className={"submit-button"
          /* if any question has a rating of zero, the button must have added 'disabled' to the 
            className */
          + (questions.some(question => question.rating === 0) ? " disabled" : "")}
            value="Enviar reseña"
          />
        </div>
      </CSSTransition>
    </>
  )}
</form>
  );
};

export default LowRatingPage;