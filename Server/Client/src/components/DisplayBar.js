import React from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Card, CardBody, CardHeader, CardTitle, Media } from 'reactstrap';
import Course from './Course';
import CourseContent from "./CourseContent";

import './DisplayBar.css';

 function DisplayBar() {
    return (
        <div className="container1">
            <div className="navbar1">
                <div className='bread'>
                        <Breadcrumb id="element1">
                            <BreadcrumbItem>DashBoard</BreadcrumbItem>
                        </Breadcrumb>
                        

                        <Breadcrumb id="element2">
                            <BreadcrumbItem active>My Profile</BreadcrumbItem>
                        </Breadcrumb>
                       
                        
                </div>
                   
                    
                    
            </div>
            <div className="MiddleContent">
                <Course/>
                <Course/>

                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <CourseContent/>
               
                

            </div>
        </div>
    )
}
export default DisplayBar;