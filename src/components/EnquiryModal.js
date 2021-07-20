import React, { Component } from 'react';
import axios from 'axios';
import Tick from "../asset/tick.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
    Row,
    Col,
    Container,
    Form,
    Popover,
    PopoverHeader,
    PopoverBody,
  } from "react-bootstrap";

import "../components/styles.scss";

export default class EnquiryModal extends Component {

    constructor(props) {
        super(props);
        console.log("PROPS "+JSON.stringify(this.props));
        this.state = {
           firstName: '',
           lastName: '',
           occupation : '',
           companyName:'',
           emailId: '',
           phoneNumber: '',
           viewForm: true
        }
        this.closeUserForm = this.closeUserForm.bind(this)
        
    }
 
  closeUserForm = () =>{
      this.setState({viewForm : false})
      this.props.closeForm();
  }
   
  getCourseId = () => {
      return this.props.courseListId;
  }
   addUser = () => {
       let id = this.getCourseId() ;
       let userDetails = {"firstName": this.state.firstName,
       "lastName": this.state.lastName,
       "occupation" : this.state.occupation,
       "companyName":this.state.companyName,
       "emailId": this.state.emailId,
       "phoneNumber": this.state.phoneNumber,
       "courseId":id
       }
       console.log(id+" userDetials "+JSON.stringify(userDetails))
        axios.post("http://localhost:3101/usersEnquired",userDetails
        ).then((response)=>{
            if(response.status === 201){
                alert("COURSE ENQUIRY SUCCESSFUL");
                this.closeUserForm();
            }
        }).catch(()=> alert("Please try again later"))
   }

    render() {
        return (
            <>
                
        <Modal isOpen={this.state.viewForm} toggle={this.closeUserForm} className={this.className} >
        <ModalHeader toggle={this.closeUserForm}><h2>Course Enquiry</h2></ModalHeader>
        <ModalBody>
          <Form>
          <Form.Group controlId="formFirstName">
                    <Form.Label>
                      First Name<span class="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="firstName"
                      value={this.state.firstName}
                     // ref={firstNameRef}
                      onChange={(e) => this.setState({firstName :e.target.value})}
                      maxLength="25"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="formLastName">
                    <Form.Label>
                      Last Name<span class="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="LastName"
                      value={this.state.lastName}
                     // ref={firstNameRef}
                      onChange={(e) => this.setState({lastName :e.target.value})}
                      maxLength="25"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="formOccupation ">
                    <Form.Label>
                     Occupation  <span class="required">*</span>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={this.state.occupation }
                      onChange={(e) => this.setState({occupation : e.target.value})}
                    >
                      <option>Select</option>
                      <option value="IT Professional">IT Professional</option>
                      <option value="Vendor">Vendor</option>
                      <option value="student">
                        Student
                      </option>
                      <option value="Others">Others</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formCompanyName">
                    <Form.Label>
                    Organization<span class="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="companyName"
                      value={this.state.companyName}
                      onChange={(e) => this.setState({companyName :e.target.value})}
                      maxLength="25"
                      autoComplete="off"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmailId">
                    <Form.Label>
                     Email Id<span class="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="emailId"
                      value={this.state.emailId}
                      onChange={(e) => this.setState({emailId :e.target.value})}
                      maxLength="25"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>
                      Phone Number<span class="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="phoneNumber"
                      value={this.state.phoneNumber}
                     // ref={firstNameRef}
                      onChange={(e) => this.setState({phoneNumber :e.target.value})}
                      maxLength="25"
                      autoComplete="off"
                    />
                  </Form.Group>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addUser}>Enquire</Button>{' '}
          <Button color="secondary" onClick={this.closeUserForm}>Cancel</Button>
        </ModalFooter>
      </Modal>

            </>
        );
    }
}