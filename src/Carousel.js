import React, { Component } from 'react';
import './Carousel.css';

import data from './data/items.json';

import Slide from './Slide';
import scrollTo from './scrollToAnimate';

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
        console.log('resizing');
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
            console.log('in here', numOfSlidesToScroll);
            this.setState({
                numOfSlidesToScroll
            });
        }
    }
    handleLeftNav(e) {
        console.log('left clicked', this);
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
        console.log('right clicked', this);
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
    renderSlides() {
        return data.map((place)=>{
            return (
                <Slide
                    img={place.imgUrl}
                    title={place.title}
                    description={place.description}
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