import React from 'react';
import img from '../../imgage/error.PNG';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="error404">
            <img src={img} alt="404 Message" />
            <h1>404 Not Found</h1>
        </div>
    );
};

export default NotFound;