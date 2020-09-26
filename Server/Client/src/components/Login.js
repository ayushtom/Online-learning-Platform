import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Label, Col, Row,Modal, ModalHeader, ModalBody,FormGroup, Input} from 'reactstrap';

import {Control, LocalForm, Errors, actions} from 'react-redux-form';
import "./Login.css"




const required =(val)=>val && val.length;
const maxLength=(len)=> (val)=> !(val)||(val.length <= len);
const minLength=(len)=>(val)=>(val) && (val.length>=len);

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            isSigninModalOpen:false,
            isSignupModalOpen:false
        };
        this.toggleSigninModal=this.toggleSigninModal.bind(this);
        this.toggleSignupModal=this.toggleSignupModal.bind(this);
    }

    toggleSigninModal()
    {
        this.setState({
            isSigninModalOpen:!this.state.isSigninModalOpen
        });
    }
    toggleSignupModal()
    {
        this.setState({
            isSignupModalOpen:!this.state.isSignupModalOpen
        });
    }
    handleSubmitSignin(values){
        console.log("Current State is:" +JSON.stringify(this.state));
        alert("Current State is:" +JSON.stringify(values));
        this.toggleSigninModal();
        
    }
    handleSubmitSignup(values){
        console.log("Current State is:" +JSON.stringify(this.state));
        alert("Current State is:" +JSON.stringify(values.username));
        this.toggleSignupModal();
        
    }
    render() {
        
        return (
            <div>
                <React.Fragment>
                <div className="ButtonLogin">
                    <Button onClick={this.toggleSigninModal}><span className="fa fa-sign-in"></span>SIGN IN</Button>
                    <br></br>
                    <br></br>

                    <Button onClick={this.toggleSignupModal}><span className="fa fa-sign-in"></span>SIGN UP</Button>

                </div>



                <Modal isOpen={this.state.isSigninModalOpen} toggle={this.toggleSigninModal}>
                    <ModalHeader toggle={this.toggleSigninModal}>SIGN IN</ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmitSignin(values)}>
                           
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="username"><b>USERNAME:</b></Label>
                                    <Control.text model=".username" placeholder="Username" className="form-control" id="username" name="username" validators={{required, minLength:minLength(3), maxLength:maxLength(16)}} />
                                    <Errors className="text-danger" model=".username" show="touched" messages={{ required:'Required',minLength:' must be Greater than 2 characters.',maxLength:'Must be 15 characters or less.'}}/>

                                </Col>
                                
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="password"><b>PASSWORD:</b></Label>
                                    <Control.text model=".password" placeholder="Password" className="form-control" id="password" name="password" validators={{required, minLength:minLength(8), maxLength:maxLength(16)}} />
                                    <Errors className="text-danger" model=".password" show="touched" messages={{ required:'Required',minLength:' must be Greater than 8 characters.',maxLength:'Must be 15 characters or less.'}}/>

                                </Col>
                                
                            </Row>
                            
                            
                            <Button type="submit" value="submit" className="bg-primary" >Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>



                <Modal isOpen={this.state.isSignupModalOpen} toggle={this.toggleSignupModal}>
                    <ModalHeader toggle={this.toggleSignupModal}>SIGN IN</ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmitSignup(values)}>
                            
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="username"><b>USERNAME:</b></Label>
                                    <Control.text model=".username"  className="form-control" id="username" name="username" validators={{required, minLength:minLength(3), maxLength:maxLength(16)}} />
                                    <Errors className="text-danger" model=".username" show="touched" messages={{ required:'Required',minLength:' must be Greater than 2 characters.',maxLength:'Must be 15 characters or less.'}}/>

                                </Col>
                                
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="password"><b>PASSWORD:</b></Label>
                                    <Control.password model=".password"  placeholder="Password" className="form-control" id="password" name="password" validators={{required, minLength:minLength(8), maxLength:maxLength(16)}} />
                                    <Errors className="text-danger" model=".password" show="touched" messages={{ required:'Required',minLength:' must be Greater than 8 characters.',maxLength:'Must be 15 characters or less.'}}/>

                                </Col>
                                
                            </Row>

                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="confirmpassword"><b>CONFIRM PASSWORD:</b></Label>
                                    <Control.text model=".confirmpassword" type="password" placeholder="Confirm Password" className="form-control" id="confirmpassword" name="confirmpassword" validators={{required, minLength:minLength(8), maxLength:maxLength(16)}} />
                                    <Errors className="text-danger" model=".confirmpassword" show="touched" messages={{ required:'Required',minLength:' must be Greater than 8 characters.',maxLength:'Must be 15 characters or less.'}}/>

                                </Col>
                                
                            </Row>
                            {/* <Row >
                                <FormGroup check>
                                <Label check htmlFor="student">
                                    <Control.radio model=".student" type="student" placeholder="Student" className="form-control" id="student" name="student" validators={{required, minLength:minLength(8), maxLength:maxLength(16)}} />


                                    <b>STUDENT</b>
                                </Label>
                                </FormGroup><br></br>
                                <FormGroup check>
                                <Label check htmlFor="admin">
                                    <Control.radio model=".admin" type="admin" placeholder="Admin" className="form-control" id="admin" name="admin" validators={{required, minLength:minLength(8), maxLength:maxLength(16)}} />


                                    <b>STUDENT</b>
                                </Label>
                                </FormGroup><br></br>
                                
                            </Row> */}

                            {/* <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    <b>STUDENT</b>
                                </Label>
                                </FormGroup><br></br>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    <b>ADMIN</b>
                                </Label>
                             </FormGroup><br></br>
                             */}
                            
                            <Button type="submit" value="submit" className="bg-primary" >Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
            
            
            </div>
        )
    }
}

export default Login
