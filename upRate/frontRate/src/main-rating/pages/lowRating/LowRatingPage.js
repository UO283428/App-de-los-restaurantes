import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { UserContext } from "../../../UserContext";
import Text from "../../components/Text";
import { URLSNAV } from "../../constants/urls";
import { API_URLS } from "../../../config";
import "./styles/LowRatingPage.css";
import RatingQuestion from "../../components/RatingQuestion";
import { HeaderContext } from "../../../HeaderContext";


/**
 *  The LowRatingPage is a React component used to render a page where users rate some questions.
 *  The user can't submit the form until they rate every question.
 *  When they attempt to submit without rating all questions, they're presented with an error message.
 *  On successful submission, the user is navigated to another page.
 *  The questions are fetched from an external API and displayed with an entry animation.
 */
const LowRatingPage = () => {
  const { setHeaderAnimated, setHeaderExtended } = useContext(HeaderContext);
  const navigate = useNavigate();
  const { jwtToken, setJwtToken, bulkData, setBulkData } = useContext(UserContext);
  const { id } = useParams();

  const [questions, setQuestions] = useState([{
    id: "none",
    text: "none",
    rating: 0,
    show: false,
  }]);
  const [isLoading, setIsLoading] = useState(true);
  const [disableButton, setDisableButton] = useState(true);

  /**
   *  This useEffect handles both the animation of the questions and fetching the questions from an external API.
   */
  useEffect(() => {
    setHeaderAnimated(false);
    setHeaderExtended(false);

    /**
     *  Initially, it sets all questions to be hidden (show: false).
     *  After a short delay (250 ms), it displays them (show: true) to give an animation effect.
     */
    const animateQuestions = async () => {
      setQuestions(prevQuestions => prevQuestions.map(q => ({ ...q, show: false })));
      await new Promise(resolve => setTimeout(resolve, 50));
      setQuestions(prevQuestions => prevQuestions.map(q => ({ ...q, show: true })));
    };

    /**
     *  It fetches the questions from an API and sets them to the component's state.
     *  If there's an error during fetching, it logs the error but still updates the state to reflect that loading is done.
     */
    const fetchQuestions = async () => {
      try {
        const response = await fetch(API_URLS.questions(id));
        const data = await response.json();
        const fetchedQuestions = data.questionsSet.map(q => ({
          id: q.question_id,
          text: q.question_text,
          rating: 0,
          show: false,
        }));
        setQuestions(fetchedQuestions);
        setIsLoading(false);
        animateQuestions();
      } catch (error) {
        console.error("Error fetching questions:", error);
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  /**
   *  Checks if any question hasn't been rated by the user. It returns a boolean value.
   *  @returns boolean value indicating if any question hasn't been rated by the user.
   */
  const isAnyQuestionUnrated = () => questions.some(q => q.rating === 0);

  /**
   *  Handles the form submission.
   *  For each unrated question, it sets an error message asking the user to rate.
   *   If all questions are rated, it updates the bulkData context with the new ratings and navigates the user to another page.
   */
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newQuestions = questions.map(question => {
      if (question.rating === 0) {
        return { ...question, errorMessage: "Por favor, selecciona al menos una estrella." };
      } else {
        return { ...question, errorMessage: "" };
      }
    });

    setQuestions(newQuestions);

    if (isAnyQuestionUnrated()) {
      return;
    }

    const bulkQuestions = questions.map(q => ({
      questionId: q.id,
      rating: q.rating,
    }));
    
    setBulkData(prevData => ({
      ...prevData,
      questions: bulkQuestions,
      lastPage: URLSNAV.LOW_RATING(id),
    }));

    goToNextPage();
  };

  useEffect(() => {
    console.log("bulkData: ", bulkData);
  }, [bulkData]);

  /**
   *  It's a curried function that returns another function.
   *  The inner function sets the rating for a specific question when the user rates it.
   *  After setting the rating, it checks whether to disable the submission button or not based on the ratings of all questions.
   *  @param {string} questionId - The id of the question to set the rating for.
   *  @returns {function} - A function that sets the rating for a specific question.
   */
  const setRatingQ = (questionId) => (rating) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = prevQuestions.map(q => q.id === questionId ? { ...q, rating } : q);
      
      // Checking whether any question is unrated based on the new, local state
      const isUnrated = updatedQuestions.some(q => q.rating === 0);
      setDisableButton(isUnrated);
  
      return updatedQuestions;
    });
  };

  /**
   *  Triggers the exit animation for the questions and then, after a short delay
   *  (corresponding to the animation duration), navigates the user to another page.
   */
  const goToNextPage = () => {
    setQuestions(prevQuestions => prevQuestions.map(q => ({ ...q, show: false })));

    setTimeout(() => {
      navigate(URLSNAV.LOW_FEEDBACK(id));
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      {isLoading ? (
        <div className="loading">
          <Text className="loading-text" content="Cargando..." />
        </div>
      ) : (
        <>
          {questions.map(question => (
            <CSSTransition
              key={question.id}
              in={question.show}
              timeout={400}
              classNames="fade-in-up"
              unmountOnExit
            >
              <div className="rating-container">
                <RatingQuestion mainText={question.text} setRating={setRatingQ(question.id)} />
                {question.errorMessage && <div className="error-message">{question.errorMessage}</div>}
              </div>
            </CSSTransition>
          ))}
          <CSSTransition
            key={"submit"}
            in={questions[0]?.show}
            timeout={400}
            classNames="fade-in-up"
            unmountOnExit
          >
            <div className="rating-container">
              <input
                type="submit"
                className={`submit-button${disableButton ? " disabled" : ""}`}
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