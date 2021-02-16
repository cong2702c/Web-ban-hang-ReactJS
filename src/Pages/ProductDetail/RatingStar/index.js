import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const DIV = styled.div`
    margin-bottom: 30px;
`;


const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <DIV>
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <lable>
                        <input 
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                            size={20}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}  
                            onClick={() => setRating(ratingValue)}  
                        />
                    </lable>
                )
            })}           
        </DIV>
    );
};

export default StarRating;