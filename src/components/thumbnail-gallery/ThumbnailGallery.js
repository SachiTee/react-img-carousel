import React, { Component } from 'react';
import './ThumbnailGallery.css';
import ActiveThumbnailWindow from './ActiveThumbnailWindow';
import ThumbnailGrid from './ThumbnailGrid';
// import axios from 'axios';
//import data from '../../data/thumbnail.json'
export default class ThumbnailGallery extends Component {

    // due to CORS issues locally couldn't test this out
    // componentDidMount() {
    //     axios.get('https://github.com/sachitee/react-img-carousel/blob/master/db.json')
    //     .then(res => {
    //         console.log(res.data.thumbnails);
    //     })
    // }

    componentDidMount(){
        fetch('https://github.com/sachitee/react-img-carousel/blob/master/db.json', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          console.log( JSON.parse(data) )
          //this.setState{( pic: JSON.parse(data) )}
        })
    }
    render() {
        return (
            <div>
                <header className="details">
                    TITLE
                </header>
                <div className="thumbnailGalleryStyles">
                    <div className="thumbnail-container">
                        <ActiveThumbnailWindow />
                        <ThumbnailGrid />

                    </div>
                </div>
                <div className="">
                    <p>Pretty adventure Travel darn clean blogger modern traveler pretty. 
                        Darn travelblogger pretty traveler fun, theme blogger clean theme Travel webdesign pretty excursion theme. Wanderlust website theme website webdesign travelblogger theme travelblogger theme. 
                        Darn WordPress Travel, colorful fun travelblogger traveler adventure wanderlust cute excursion. 
                        Excursion webdesign blogger clean simple webdesign colorful clean simple, wanderlust WordPress cute traveler traveler. 
                        Clean Travel website wanderlust Travel Travel organized, blogger traveling simple traveler Travel blogger traveler. 
                        Wanderlust website fun whimsical simple darn simple organized, design wanderlust traveler wanderlust traveling. 
                        Traveler travelblogger modern traveling travelblogger colorful theme cute design. 
                        Design excursion traveler adventure design traveling travelblogger.
                    </p>
                    <p>Darn travelblogger whimsical, theme traveler blogger design organized cute simple. 
                        Fun darn theme darn modern colorful modern clean. 
                        Traveler design theme, cute webdesign expedition darn adventure design WordPress traveler design traveler. 
                        Design darn cute darn fun pretty travelblogger blogger fun, simple WordPress darn fun. 
                        Modern excursion webdesign wanderlust adventure traveler pretty. 
                        Theme modern colorful colorful theme, cute colorful colorful website excursion excursion simple. 
                        Design fun design traveler blogger traveler excursion organized theme, simple expedition design Travel simple. 
                        Traveler Travel expedition theme simple webdesign colorful, fun pretty wanderlust theme Travel whimsical. 
                        Theme simple traveling cute theme modern wanderlust Travel.
                    </p>
                </div>
            </div>
        )
        
    }
}

