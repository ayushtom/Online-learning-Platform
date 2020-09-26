import React from "react";
import { Breadcrumb, BreadcrumbItem,Button, Card, CardBody, CardHeader, CardTitle, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./SideBar.css";







function SideBar(){

    return(
        <div className="container">
            <div className="sidebar">
               
                    <Breadcrumb>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem active>My Couses</BreadcrumbItem>
                    </Breadcrumb>
                    
               

                
            </div>
            <div className="Courses">
                <Card>
                    <h1>Courses</h1>
                    
                    <CardBody>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        <CardHeader><Button>courses 1</Button></CardHeader>
                        
                        
                        
                    </CardBody>
                </Card>

            </div>
           
           



        </div>
    );
}

export default SideBar;