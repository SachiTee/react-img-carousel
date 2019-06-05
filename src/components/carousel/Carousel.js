import React, { Component } from 'react';
import './Carousel.scss';

import data from '../../data/items.json';

import Slide from './Slide';
import scrollTo from '../../scrollToAnimate';

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.handleLeftNav = this.handleLeftNav.bind(this);
        this.onResize = this.onResize.bind(this);
        this.state = {
            numOfSlidesToScroll: 2
        }
    }
    onResize() {
        this.checkNumOfSlidesToScroll();
    }
    componentDidMount() {
        this.checkNumOfSlidesToScroll();
        window.addEventListener('resize', this.onResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    checkNumOfSlidesToScroll() {
        var numOfSlidesToScroll;
        if (window.innerWidth <= 900 ) {
            numOfSlidesToScroll = 1;
        } else {
            numOfSlidesToScroll = 2;
        }
        if (this.state.numOfSlidesToScroll !== numOfSlidesToScroll) {
            this.setState({
                numOfSlidesToScroll
            });
        }
    }
    handleLeftNav(e) {
        const { carouselViewport } = this.refs;
        var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
        var widthOfSlide = 360;
        var newPos = carouselViewport.scrollLeft - (widthOfSlide * numOfSlidesToScroll);
        var timeToMoveOneSlide = 200;
        var totalTimeToMove = Math.min( (numOfSlidesToScroll * timeToMoveOneSlide), 400 );
        scrollTo({
            element: carouselViewport,
            to: newPos, 
            duration: totalTimeToMove, 
            scrollDirection: 'scrollLeft'
        });
    }
    handleRightNav = (e) => {
        const { carouselViewport } = this.refs;
        var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
        var widthOfSlide = 360;
        var newPos = carouselViewport.scrollLeft + (widthOfSlide * numOfSlidesToScroll);
        // var newPos = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
        var timeToMoveOneSlide = 200;
        var totalTimeToMove = Math.min( (numOfSlidesToScroll * timeToMoveOneSlide), 400 );
        scrollTo({
            element: carouselViewport,
            to: newPos, 
            duration: totalTimeToMove, 
            scrollDirection: 'scrollLeft'
        });
    }

    renderSlides(handleClick) {
        return data.map((item) => {
            return (
                <Slide
                    img={item.imgUrl}
                    title={item.title}
                    description={item.description}
                />
            );
        })
    }

    render() {
        return (
            <div className="carousel-container">
                <button 
                    className="carousel-nav carousel-left-nav"
                    onClick={this.handleLeftNav}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="carousel-viewport" ref="carouselViewport">
                    {this.renderSlides()}
                </div>
                <button 
                    className="carousel-nav carousel-right-nav"
                    onClick={this.handleRightNav}
                    >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        );
    }
}

export default Carousel;