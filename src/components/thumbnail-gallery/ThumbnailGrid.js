import React from 'react';
import './ThumbnailGallery.scss';
import Thumbnail from './Thumbnail';

const ThumbnailGrid = ({thumbnails, handleClick}) => {
    return (
        <div className="gallery-grid">
            {
                thumbnails.map((thumbnail, i) => {
                    return (
                        <Thumbnail 
                            key={thumbnail.imgUrl}
                            imgUrl={thumbnail.imgUrl}
                            handleClick={handleClick}
                            index={i}
                        />
                    )
                })
            }
        </div>
    )
}

export default ThumbnailGrid;