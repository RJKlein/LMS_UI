import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import {Card} from '../../components/Card/Card.jsx';
import {FormInputs} from '../../components/FormInputs/FormInputs.jsx';
import {UserCard} from '../../components/UserCard/UserCard.jsx';
import Button from '../../elements/CustomButton/CustomButton.jsx';

import avatar from "../../assets/img/faces/face-3.jpg";

import {postRequestOptions, checkStatus} from '../../helpers/fetch';
import { apiUrl } from "../../helpers/api"

class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            person: [] 
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    
    componentDidMount() {
        fetch(apiUrl+'persons/3')
            .then(response => response.json())
            .then(person => 
              {
                this.setState({
                  person
                })
              console.log("person: ", this.state.person)
            })
      }

    handleSubmit(event) {

        event.preventDefault();

        const formData = new FormData(event.target)
        const request = postRequestOptions(formData)
    
        fetch(apiUrl+'persons', request)        
        .then(checkStatus)
        .then(response => response.json())
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Edit Profile"
                                content={
                                    <form onSubmit={this.handleSubmit}>
                                        <FormInputs
                                            ncols = {["col-md-5" , "col-md-3" , "col-md-4"]}
                                            proprieties = {[
                                                {
                                                 name: "userType",
                                                 label : "User Type",
                                                 type : "select",
                                                 option: 'value="select"',
                                                 bsClass : "form-control",
                                                 placeholder : "User type",
                                                 //defaultValue : "student"
                                                },
                                                {
                                                 label : "Username",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Username",
                                                 defaultValue : "michael23"
                                                },
                                                {
                                                 label : "Email address",
                                                 type : "email",
                                                 bsClass : "form-control",
                                                 placeholder : "Email"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-6" , "col-md-6"]}
                                            proprieties = {[
                                                {
                                                 name: "firstName",
                                                 label : "First name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "First name",
                                                 defaultValue : "Mike"
                                                },
                                                {
                                                 name: "lastName",
                                                 label : "Last name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Last name",
                                                 defaultValue : "Andrew"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Adress",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Home Adress",
                                                    defaultValue : "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-4","col-md-4","col-md-4"]}
                                            proprieties = {[
                                                {
                                                    label : "City",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "City",
                                                    defaultValue : "Mike"
                                                },
                                                {
                                                    name: "dateOfBirth",
                                                    label : "D.O.B",
                                                    type : "date",
                                                    bsClass : "form-control",
                                                    placeholder : "date"
                                                },
                                                {
                                                    label : "Postal Code",
                                                    type : "number",
                                                    bsClass : "form-control",
                                                    placeholder : "ZIP Code"
                                                }
                                            ]}
                                        />

                                        <Row>
                                            <Col md={12}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>About Me</ControlLabel>
                                                    <FormControl rows="5" componentClass="textarea" bsClass="form-control" placeholder="Here can be your description" defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            bsStyle="info"
                                            pullRight
                                            fill
                                            type="submit"
                                        >
                                            Update Profile
                                        </Button>
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <UserCard
                                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                avatar={avatar}
                                name="Mike Andrew"
                                userName="michael24"
                                description={
                                    <span>
                                        "Lamborghini Mercy
                                        <br />
                                        Your chick she so thirsty
                                        <br />
                                        I'm in that two seat Lambo"
                                    </span>
                                }
                                socials={
                                    <div>
                                        <Button simple><i className="fa fa-facebook-square"></i></Button>
                                        <Button simple><i className="fa fa-twitter"></i></Button>
                                        <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                    </div>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>>
            </div>
        );
    }
}

export default UserProfile;
