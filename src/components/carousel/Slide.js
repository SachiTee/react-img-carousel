import React from 'react';
import './Slide.css';
import {Link} from 'react-router-dom';
const Slide = ({index, img, title, description}) => {
    return (
        <div className="slide">
            <Link to={"/detail"} param={{ title: title }}>
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