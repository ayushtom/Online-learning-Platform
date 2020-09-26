import React from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Card, CardBody,CardImg,CardText, CardHeader, CardTitle, Media } from 'reactstrap';
import "./Course.css";

 function Course() {
    return (
        <div className="CourseContent">
            <Card className="card1">
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>Card title</h2></CardTitle>
                
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Enroll</Button>
                </CardBody>
            </Card>
        </div>
    )
}
export default Course;

