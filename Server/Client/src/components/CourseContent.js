import React from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Card, CardBody,CardImg,CardText, CardHeader, CardTitle, Media } from 'reactstrap';

import './CourseContent.css';
import ReactPlayer from "react-player";



function CourseContent() {
    return (
        <div className="OneContent">
            <div className="player-wrapper">
                <ReactPlayer 
                    className="react-player" 
                    url="https://www.youtube.com/watch?v=9WSoCKtZkvc" 
                    width="100%" 
                    height="50vh" 
                    controls={true}/>
            </div>
            <div>
            <Card className="card1">

                <Button>Attempt Quiz</Button>
                
            </Card>
            </div>
        </div>
        
    )
}

export default CourseContent;