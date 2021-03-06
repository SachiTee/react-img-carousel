import React from 'react';
import './ThumbnailGallery.scss';
const ActiveThumbnailWindow = ({activeThumbnail}) => {
    return (
        <div className="flexed">
            <img src={activeThumbnail.imgUrl} alt="thumbnail" />
        </div>
    )
}

export default ActiveThumbnailWindow;