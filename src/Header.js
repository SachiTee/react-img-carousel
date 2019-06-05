import React from 'react';


const Header = ({title, headline}) => {
   
    return (
        <React.Fragment>
            <header className="App-header">
                <h1>{title}</h1>
                <p className="headline">
                    {headline}
                </p>
            </header>
        </React.Fragment>
    );
}

export default Header;