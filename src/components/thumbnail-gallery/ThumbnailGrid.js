import React from 'react';
import './ThumbnailGallery.css';
import Thumbnail from './Thumbnail';

const ThumbnailGrid = () => {
    return (
        <div className="gallery-grid">
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
        </div>
    )
}

export default ThumbnailGrid;