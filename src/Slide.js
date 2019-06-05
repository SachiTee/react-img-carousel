import React, { Component } from 'react';
import './Slide.css';
import {Link} from 'react-router-dom';
class Slide extends Component {

    render() {
        const {
            img,
            title,
            description,
        } = this.props;

        return (
            <div className="slide">
                <Link to={"/detail"}>
                <img
                    src={img}
                    alt="travel"
                />
                </Link>
                <p className="title">{title}</p>
                <br />
                <p className="description">{description}</p>
            </div>
        );
    }
}
export default Slide;