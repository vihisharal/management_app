import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layouts/TextInputGroup'; //default case don't use curly brackets

import uniqeID  from 'uniqid';

class AddPatient extends Component {
  state={
       /* id:uniqeID(), */
       name:"",
       serialNumber:"",
       mobileNumber:""
  }

  onChange = e => this.setState({[e.target.name]:e.target.value});
  
  onSubmit = (dispatch,e) => {
    e.preventDefault();
    const{name,serialNumber,mobileNumber}=this.state;
    const newPatient={
      id:uniqeID(),
      name,
      serialNumber,
      mobileNumber
    };
    dispatch({ type:"ADD_PATIENT", payload:newPatient });
    this.setState({
      name:"",
      serialNumber:"",
      mobileNumber:""
    });
  }

  render() {
    const {name,serialNumber,mobileNumber} =this.state;

    return(
      <Consumer>
        {value => {
          const {dispatch}=value;
          return(
            <div className="card mb-3">
            <div className="card-header">Add Patient</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                <TextInputGroup 
                  label="Name"
                  name="name"
                  placeholder="Enter Name..."
                  value={name}
                  onChange={this.onChange} 
                /> 
                
                <TextInputGroup 
                  label="Serial Number"
                  name="serialNumber"
                  placeholder="Enter Serial Number..."
                  value={serialNumber}
                  onChange={this.onChange}
                /> 
                <TextInputGroup 
                  label="Mobile Number"
                  name="mobileNumber"
                  placeholder="Enter Mobile Number..."
                  value={mobileNumber}
                  onChange={this.onChange}
                />
                <input type="submit" value="Add Patient" className="btn btn-light btn-block" />                       
              </form>
            </div>
          </div>
          );
        }}
      </Consumer>
    )
  }
}
export default AddPatient;