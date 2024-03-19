import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
    return (
        <div>
            <div>
                <img src={review.image} alt='' />
            </div>

            <div>
                <div>{review.name}</div>
            </div>

            <div>
                <div>{review.job}</div>
            </div>

            <div>
                <FaQuoteLeft />
            </div>

            <div>
                <div>{review.text}</div>
            </div>

            <div>
                <FaQuoteRight />
            </div>
        </div>
    )
}

export default Card