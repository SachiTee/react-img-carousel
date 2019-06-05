import React from 'react';
import Header from '../components/sections/Header';
import Carousel from '../components/carousel/Carousel';
import Footer from '../components/sections/Footer';

const MainPage = () => {
    return(
        <div className="App">
            <Header 
                title="HEADER ONE"
                headline="Traveler Travel excursion website darn colorful organized."
            />
            <Carousel />
            <Footer />
        </div>
    );
};

export default MainPage;