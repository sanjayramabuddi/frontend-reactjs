import { useState } from "react";

function Cards({ id, info, image, price, name, removeCard }) {

    const [readMore, setreadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0, 200)}...`;

    function readMoreHandler() {
        setreadMore(!readMore);
    };

    return (
        <div className="card">
            <img src={image} className="image" alt=""></img>
            <div className='tour-info'>
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">{description}
                    <span className="read-more" onClick={readMoreHandler}>{readMore ? `show less` : `read more`}</span>
                </div>
            </div>
            <button className="btn" onClick={() => removeCard(id)}>Not Interested</button>
        </div>
    );
}

export default Cards;