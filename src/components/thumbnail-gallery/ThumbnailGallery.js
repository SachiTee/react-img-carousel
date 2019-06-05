import React, { Component } from 'react';
import ActiveThumbnailWindow from './ActiveThumbnailWindow';
import ThumbnailGrid from './ThumbnailGrid';
import axios from 'axios';
import './ThumbnailGallery.scss';
export default class ThumbnailGallery extends Component {
    state = {
        thumbnails: [],
        activeIndex: 0
    }
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/sachitee/react-img-carousel/data')
        .then(res => {
            this.setState({ thumbnails: res.data.thumbnails })
        })
    }

    renderThumbnails = () => { 
        const { thumbnails, activeIndex } = this.state;
        if (thumbnails.length) {
            return (
                <ActiveThumbnailWindow
                    activeThumbnail={ thumbnails[activeIndex] }
                /> 
            )
        }
        return null;
    }
    
handleClick = (e) => {
    const newActiveIndex = e.target.getAttribute('data-index')
    this.setState({ activeIndex: newActiveIndex })
}

    render() {
        const { thumbnails } = this.state;

        return (
            <div>
                <div className="thumbnailGalleryStyles">
                    <div className="thumbnail-container">
                        { this.renderThumbnails() }
                        <ThumbnailGrid 
                            thumbnails={thumbnails}
                            handleClick={this.handleClick}
                        />
                    </div>
                </div>
            </div>
        )
        
    }
}

