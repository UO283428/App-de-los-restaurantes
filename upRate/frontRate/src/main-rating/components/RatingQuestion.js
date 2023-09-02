import React from "react";
import Text from "./Text";
import CustomStarIcon from "./CustomStarIcon";

const RatingQuestion = ({ className, mainText, setRating }) => {

    return (
        <>
          <Text 
            className={"text-content"}
            content={mainText} />
          
          <CustomStarIcon 
            className={"rating-icons"}
            setRating={setRating}/>
        </>
    );

};

export default RatingQuestion;