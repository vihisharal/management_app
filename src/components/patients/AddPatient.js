import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layouts/TextInputGroup'; //default case don't use curly brackets

import uniqeID  from 'uniqid';

class AddPatient extends Component {
  state={
       /* id:uniqeID(), */
       name:"",
       serialNumber:"",
       mobileNumber:"",
       errors:{}
       
  }

  onChange = e => this.setState({[e.target.name]:e.target.value});
  
  onSubmit = (dispatch,e) => {
    e.preventDefault();
    const{name,serialNumber,mobileNumber}=this.state;

     //error checking
     if(name===''){
      this.setState({
        errors:{name:'Name is required.'}
      }); return;
     }
     if(serialNumber===''){
      this.setState({
        errors:{serialNumber:'Serial number is required.'}
      }); return;
     }
     if(!(/^[1-9]{1}[0-9]{9}$/.test(mobileNumber)) && mobileNumber.length!==10){
      this.setState({
        errors:{mobileNumber:'Mobile number is required.'}
      }); return;
     }           

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
      mobileNumber:"",
      errors:{}
    });
  }

  render() {
    const {name,serialNumber,mobileNumber,errors} =this.state;

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
                  error={errors.name}
                  
                /> 
                
                <TextInputGroup 
                  label="Serial Number"
                  name="serialNumber"
                  placeholder="Enter Serial Number..."
                  value={serialNumber}
                  onChange={this.onChange}
                  error={errors.serialNumber}
                /> 
                <TextInputGroup 
                  label="Mobile Number"
                  name="mobileNumber"
                  placeholder="Enter Mobile Number..."
                  value={mobileNumber}
                  onChange={this.onChange}
                  error={errors.mobileNumber}
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