import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {
    render() {
        const {
            title,
            description,
        } = this.props;
        return (
            <div className="slide"><p className="title">{title}</p><br /><p className="description">{description}</p></div>
           
        );
    }
}
export default Slide;