import React, { useState } from 'react';
import Card from './Card';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = (props) => {

    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        const randomNum = Math.floor(Math.random() * reviews.length);
        setIndex(randomNum);
    }

    return (
        <div>
            <Card review={reviews[index]} />

            <div>
                <button onClick={leftHandler}><FaChevronLeft /></button>
                <button onClick={rightHandler}><FaChevronRight /></button>
            </div>

            <div>
                <button onClick={surpriseHandler}>Surprise Me</button>
            </div>
        </div>
    );
}

export default Testimonials