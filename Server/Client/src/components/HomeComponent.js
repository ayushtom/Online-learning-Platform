import React from 'react';
import './HomeComponent.css';
import SideBar from './SideBar';
// import SideBar1 from './SideBar1';
import DisplayBar from './DisplayBar'
 function HomeComponent() {
    return (
        <div className="HomeComponent">
            <SideBar/>
            
            <DisplayBar/>
        </div>
    )
}

export default HomeComponent;