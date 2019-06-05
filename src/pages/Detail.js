import React, { Component } from 'react';
import Header from '../Header';
import ThumbnailGallery from '../components/thumbnail-gallery/ThumbnailGallery';
import Footer from '../Footer';

const DetailPage = () => {
    return (
        <div className="app-details">
            <Header />
            <ThumbnailGallery />  
            <Footer />
        </div>
    )
}

export default DetailPage;