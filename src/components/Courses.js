import React, { Component } from 'react';
import axios from 'axios';
import Tick from "../asset/tick.png";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form } from 'reactstrap';

import "../components/styles.scss";
import EnquiryModal from './EnquiryModal';

export default class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
           courseList : [],
           showUserForm : false,
           firstName: '',
           lastName: '',
           emailId: '',
           phoneNumber: '',
           nationality: '',
           zipCode: '',
           courseId:'',
           className: props.className
        }
        this.displayUserForm = this.displayUserForm.bind(this);
        this.closeUserForm = this.closeUserForm.bind(this);
    }

   componentDidMount(){
     axios.get(" http://localhost:3101/courses").then((response)=>{
         this.setState({
             courseList : response.data
         })
        
     })
   } 

   displayUserForm = (id) => {
    this.setState({
        courseId: id,
        showUserForm: true
    })
   }

   closeUserForm = () => {
    this.setState({
        showUserForm: false
    })
   }
   
    render() {
        return (
            <>
                 <div className="main-content">
                    <div className="main-content-container">
                        <div className="main-content-header">
                            <h1>List of Courses</h1>
                            <button><Link to="/userEnquired">Users Enquired</Link></button>
                        </div>
                        <div className="main-content-body">
                            <div className="main-content-list">
                                {this.state.courseList.length > 0 && this.state.courseList.map((course, index) => {
                                    return <div className="course-card">
                                        <span className="course-name">{course.courseName}</span>
                                        <p>{course.courseSortDesc}</p>
                                        <button className="enquire-button" onClick={()=>this.displayUserForm(course.id)}>Enquire</button>
                                       
                                    </div>
                                })
                                }
                            </div>

                        </div>
                        {this.state.showUserForm ? <EnquiryModal closeForm={this.closeUserForm} courseListId={this.state.courseName}/> : null
                    }
                    </div>
                </div> 

            </>
        );
    }
}