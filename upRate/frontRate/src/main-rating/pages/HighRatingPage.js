import React from "react";
import Header from "../components/Header";
import "./styles/HighRatingPage.css";

const HighRatingPage = () => {

    return (
        <div className="app">
            <Header />
            <div className="feedback-container">
                <h1>¡Gracias por tu feedback!</h1>
                <p>¡Nos vemos pronto!</p>
            </div>
        </div>
    );
}

export default HighRatingPage;