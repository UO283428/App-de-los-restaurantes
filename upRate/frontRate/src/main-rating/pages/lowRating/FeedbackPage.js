import React, { useEffect, useState, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate, useParams } from 'react-router-dom';
import Text from '../../components/Text';
import { URLSNAV } from '../../constants/urls';
import { HeaderContext } from '../../../HeaderContext';
import { UserContext } from '../../../UserContext';
import './styles/FeedbackPage.css';
import { API_URLS } from '../../../config';


/**
 *  FeedbackPage provides a user interface for users to submit feedback.
 *  The interface features an animated form which includes a text area for input and a submit button.
 *  Feedback entered by the user is validated for content length before processing.
 */
const FeedbackPage = () => {
    const { setHeaderAnimated, setHeaderExtended } = useContext(HeaderContext);
    const { jwtToken, setJwtToken, bulkData, setBulkData } = useContext(UserContext);

    const [feedbackText, setFeedbackText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [show, setShow] = useState(false);
    
    const navigate = useNavigate();
    const { id } = useParams();
    const ratingContainerRef = useRef(null);

    /**
     * Sets the initial state of the header and trigger the fade-in animation of the feedback form when the component is mounted.
     */
    useEffect(() => {
        setHeaderState();
        initializeAnimation();
    }, []);

    /**
     *  This function sets the initial state of the header by making sure it is not animated and compact
     */
    const setHeaderState = () => {
        setHeaderExtended(false);
        setHeaderAnimated(false);
    }
    
    /**
     *  This function sets a timer to trigger an animation effect (fade in) for the feedback form
     *  shortly after the component is mounted to ensure the animation is correctly executed.
     */
    const initializeAnimation = () => {
        const timer = setTimeout(() => setShow(true), 50);
        return () => clearTimeout(timer);
    }

    /**
     *  Computes and returns the height that a textarea should be set to, based on its content and styles.
     *  This makes the textarea dynamically adjust its height based on the feedback content.
     */
    const computeTextAreaHeight = (target) => {
        const computed = window.getComputedStyle(target);
        const height = parseInt(computed.getPropertyValue("border-top-width"), 10)
                     + parseInt(computed.getPropertyValue("border-bottom-width"), 10)
                     + target.scrollHeight;
        return `${height}px`;
    }

    /**
     *  An event handler that adjusts the height of the textarea dynamically as users type their feedback.
     *  It also updates the component state with the current feedback text.
     */
    const handleInputChange = (e) => {
        e.target.style.height = "inherit";
        e.target.style.height = computeTextAreaHeight(e.target);
        setFeedbackText(e.target.value);
        checkLengthIsLowerThan500(e.target.value);
    };

    /**
     *  checkLengthIsLowerThan500 checks if the length of the text is lower than 500 characters.
     *  If it is, it sets the error message to an empty string.
     *  If it is not, it sets the error message to a string indicating the error.
     */
    const checkLengthIsLowerThan500 = (text) => {
        if (text.length > 500) {
            setErrorMessage('Por favor, no escribas más de 500 caracteres');
        } else {
            setErrorMessage('');
        }
    }

    /**
     *  Validates the user's feedback for content.
     *  Checks if the feedback is neither empty nor exceeds the set limit of 500 characters.
     *  It updates the error message accordingly.
     */
    const validateFeedback = () => {
        if (!feedbackText.length) {
            setErrorMessage('Por favor, escribe algo');
            return false;
        } else if (feedbackText.length > 500) {
            setErrorMessage('Por favor, no escribas más de 500 caracteres');
            return false;
        } else {
            setErrorMessage('');
        }
        return true;
    }

    /**
     *  Handles the form submission event.
     *  It validates the user feedback and, if valid,
     *  updates the bulk data context, triggers animations, and navigates to a thank you page.
     */
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!validateFeedback()) return;

        handleDataOperation();
        goToNextPage();
    };

    const handleDataOperation = async () => {
        await updateBulkData();
        await sendBulkData();
        await console.log(bulkData);
    };

    /**
     * Updates the context data (bulkData) with the current feedback and information about the last page.
     */
    const updateBulkData = () => {
        setBulkData(prevData => ({
            ...prevData,
            finalText: feedbackText,
            lastPage: URLSNAV.LOW_FEEDBACK(id)
        }));
    }

    /**
     * Sends the bulk data to the backend.
     */
    const sendBulkData = () => {
        fetch(API_URLS.bulkData(id), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({bulkData: bulkData})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send bulk data');
            }
            // handle successful response
        })
        .catch(error => {
            console.error(error);
            // handle error
        });
    }

    /**
     * Triggers necessary animations for the header and feedback form.
     * Once animations are complete, it navigates to a thank you page.
     */
    const goToNextPage = () => {
        setShow(false);
        setHeaderAnimated(true);
        setHeaderExtended(true);
        setTimeout(() => navigate(URLSNAV.LOW_THANX(id)), 400);
    }

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <CSSTransition
                in={show}
                nodeRef={ratingContainerRef}
                timeout={400}
                classNames="fade-in-up-out-down"
                unmountOnExit
            >
                <div className="rating-container" ref={ratingContainerRef}>
                    <Text className="question" content="¿Cuentanos un poco más de tu experiencia?" />
                    <textarea
                        className="text-input"
                        placeholder="Escribe tu opinión aquí"
                        rows="1"
                        onChange={handleInputChange}
                    />
                    {(errorMessage) && <div><br/><div className="error-message">{errorMessage}</div></div>}
                    <input
                        type="submit"
                        className={`submit-button ${!feedbackText.length ? "disabled" : ""}`}
                        value="Enviar respuestas"
                    />
                </div>
            </CSSTransition>
        </form>
    );
}

export default FeedbackPage;