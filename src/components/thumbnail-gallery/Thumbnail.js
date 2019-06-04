import React from 'react';
import './ThumbnailGallery.css';
const Thumbnail = ({imgUrl, handleClick, index}) => {
    return (
        <div className="thumbnail">
            <img 
                src={imgUrl} 
                className="imgThumb" 
                onClick={handleClick}
                data-index={index}  
            />
        </div>
    )
}

export default Thumbnail;