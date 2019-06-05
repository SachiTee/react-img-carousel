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
            numOfSlidesToScroll: 2,
            fill: false
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
        var widthOfSlide = 412;
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
        var widthOfSlide = 412;
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
    lastPositioning() {
        const { carouselViewport } = this.refs;
        var numOfSlidesToScroll = 3;
        var widthOfSlide = 412;
        let newPos;
        if (carouselViewport.scrollLeft === 0) {
            newPos = carouselViewport.scrollLeft + (2 * widthOfSlide * numOfSlidesToScroll);
        } else if (carouselViewport.scrollLeft === 1236) {
            newPos = carouselViewport.scrollLeft + (widthOfSlide * numOfSlidesToScroll)
        } else if (carouselViewport.scrollLeft === 2472) {
            newPos = carouselViewport.scrollLeft + (widthOfSlide * 0);
        }
        return newPos;
    }
    firstDot = (e) => {
        const { carouselViewport } = this.refs;
        var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
        var newPos = 0;
        var timeToMoveOneSlide = 200;
        var totalTimeToMove = Math.min( (numOfSlidesToScroll * timeToMoveOneSlide), 400 );
        scrollTo({
            element: carouselViewport,
            to: 0, 
            duration: totalTimeToMove, 
            scrollDirection: 'scrollLeft'
        });
    }
    midDot = (e) => {
        const { carouselViewport } = this.refs;
        var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
        var newPos = 1236;
        // var newPos = (carouselViewport.scrollLeft === 0) ? (carouselViewport.scrollLeft + (widthOfSlide * numOfSlidesToScroll)) : (carouselViewport.scrollLeft - (2 * widthOfSlide));
        var timeToMoveOneSlide = 200;
        var totalTimeToMove = Math.min( (numOfSlidesToScroll * timeToMoveOneSlide), 400 );
        scrollTo({
            element: carouselViewport,
            to: newPos, 
            duration: totalTimeToMove, 
            scrollDirection: 'scrollLeft'
        });
    }
    
    lastDot = (e) => {
        const { carouselViewport } = this.refs;
        var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
        var newPos = this.lastPositioning();
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
        return data.map((item, i) => {
            return (
                <Slide
                    img={item.imgUrl}
                    title={item.title}
                    description={item.description}
                    data-index={i}
                />
            );
        })
    }

    render() {
        return (
            <div>
                <div className="carousel-container">
                    <button 
                        className="carousel-nav carousel-left-nav"
                        onClick={ this.handleLeftNav }
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
                <nav className="carousel">
                    <input id="carousel-item-1" type="radio" name="carousel-dots" />
                    <label htmlFor="carousel-item-1" onClick={ this.firstDot }>Go to item 1</label>
                    <input id="carousel-item-2" type="radio" name="carousel-dots" />
                    <label htmlFor="carousel-item-2" onClick={ this.midDot } >Go to item 2</label>
                    <input id="carousel-item-3" type="radio" name="carousel-dots" /> 
                    <label htmlFor="carousel-item-3" onClick={ this.lastDot } >Go to item 3</label>
                </nav>
            </div>
        );
    }
}

export default Carousel;