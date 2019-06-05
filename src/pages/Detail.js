import React from 'react';
import Header from '../components/sections/Header';
import ThumbnailGallery from '../components/thumbnail-gallery/ThumbnailGallery';
import Footer from '../components/sections/Footer';
import './Detail.scss';
import {Link} from 'react-router-dom';

const DetailPage = (title) => {
    return (
        <div className="app-details">
            <Header 
                title="TITLE"
            />  
            <div class="breadcrumbs"><Link to="/">Home</Link> | <Link to="/detail">Details</Link></div>
            <ThumbnailGallery />  
            <div className="detailDescription">
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
            <Footer />
        </div>
    )
}

export default DetailPage;