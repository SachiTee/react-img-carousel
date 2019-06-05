import React from 'react';
import './Slide.scss';
import {Link} from 'react-router-dom';
const Slide = ({index, img, title, description}) => {
    return (
        <div className="slide" data-index={index}>
            <Link to={"/detail"}>
            <img
                src={img}
                alt="travel"
                data-index={index}
            />
            </Link>
            <p className="title">{title}</p>
            <br />
            <p className="description">{description}</p>
        </div>
    );
}
export default Slide;