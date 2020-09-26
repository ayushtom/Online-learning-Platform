import React from 'react';
import Login from './Login';
import './MainComponent.css';
import HomeComponent from './HomeComponent';

 function MainComponent() {
    return (
        <div className="Main">
            
            <Login/>
            <HomeComponent/>
        </div>
    )
}

export default MainComponent;
