import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
 class login2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSigninModalOpen:false,
            isSignupModalOpen:false,
            username: '',
            password: '',
            // telnum: '',
            // email: '',
             student: false,
             admin:false,
            // contactType: 'Tel.',
            // message: '',
            touched: {
                username: false,
                password: false,
                // telnum: false,
                // email: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmitSignin(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    handleSubmitSignup(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(username,password) {
        const errors = {
            username: '',
            password: '',
            
        };

        if (this.state.touched.username && username.length < 3)
            errors.firstname = 'username should be >= 3 characters';
        else if (this.state.touched.username && username.length > 10)
            errors.firstname = 'username should be <= 10 characters';

        if (this.state.touched.password && password.length < 3)
            errors.lastname = 'Password should be >= 3 characters';
        else if (this.state.touched.password && password.length > 10)
            errors.lastname = 'password should be <= 10 characters';

        

        return errors;
    }
    
    render() {
        const errors = this.validate(this.state.username, this.state.password);
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
                    <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="username" md={2}>USERNAME</Label>
                                <Col md={10}>
                                    <Input type="text" id="username" name="username"
                                        placeholder="First Name"
                                        value={this.state.username}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password" md={2}>PASSWORD</Label>
                                <Col md={10}>
                                    <Input type="text" id="password" name="password"
                                        placeholder="Last Name"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </Col>                        
                            </FormGroup>
                            
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.student}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>STUDENT</strong>
                                        </Label>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.admin}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>ADMIN</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                
                            </FormGroup>
                            
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        SUBMIT
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>



                {/* <Modal isOpen={this.state.isSignupModalOpen} toggle={this.toggleSignupModal}>
                    <ModalHeader toggle={this.toggleSignupModal}>SIGN IN</ModalHeader>

                    <ModalBody>
                        
                    </ModalBody>
                </Modal> */}
            </React.Fragment>
            
            </div>
        )
    }
}

export default login2
