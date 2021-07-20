import React, { Component } from 'react';
import axios from 'axios';
import Tick from "../asset/tick.png";

import "../components/styles.scss";

export default class UserEnquired extends Component {

    constructor(props) {
        super(props);
        this.state = {
           userList: [],
           courseList: []
        }
    }

    componentDidMount(){
        console.log("userEnquired");
        axios.get(" http://localhost:3101/usersEnquired").then((response)=>{
            this.setState({
                userList : response.data
            })
           
        })
                 
      } 

    render() {
        return (
            <>
                 <div className="main-content">
                    <div className="main-content-container">
                        
                     <div className="main-content-header">
                         <h3>User List</h3>
                     </div>
                     <div className="main-content-body">
                         <div className="main-content-quote">
                             <div className="row">
                                 <span className="feild-value bold-feild">Id</span>
                                 <span className="feild-value bold-feild"> First Name </span>
                                 <span className="feild-value bold-feild"> Last Name </span>
                                 <span className="feild-value bold-feild" > Email Id </span>
                                 <span className="feild-value bold-feild">Phone Number</span>
                                 <span className="feild-value bold-feild">Occupation</span>
                                 <span className="feild-value bold-feild">Company Name</span>
                                 <span className="feild-value bold-feild">Course Enquired</span>
                             </div>
                             { this.state.userList.length > 0 ?
                                 this.state.userList.map((user, index) => { 
                                     return <div className="row">
                                     <span className="feild-value">{user.id}</span>
                                     <span className="feild-value"> {user.firstName} </span>
                                     <span className="feild-value"> {user.lastName} </span>
                                     <span className="feild-value"> {user.emailId} </span>
                                     <span className="feild-value" > {user.phoneNumber} </span>
                                     <span className="feild-value" > {user.occupation} </span>
                                     <span className="feild-value"> {user.companyName} </span>
                                     <span className="feild-value"> {user.courseName}</span>
                                 </div>
                             }) : null

                             }

                         </div>

                     </div>
                 </div>
               
                   
                </div> 

            </>
        );
    }
}