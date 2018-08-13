import React, { Component } from 'react';

import './Loader.css';

class Loader extends Component {
    render() {
        return (
            <div className="loading-container">
                <div className="opacity"></div>
                <div className="loader">
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                </div>
            </div>
        )
    }
}

export default Loader;