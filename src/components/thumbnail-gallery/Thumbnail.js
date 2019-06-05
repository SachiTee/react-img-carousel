import React from 'react';
import './ThumbnailGallery.scss';
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