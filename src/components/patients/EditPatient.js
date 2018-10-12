import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layouts/TextInputGroup'; //default case don't use curly brackets
import axios from 'axios';
//import uniqeID  from 'uniqid';

class EditPatient extends Component {
  state={
       /* id:uniqeID(), */
       name:"",
       serialNumber:"",
       mobileNumber:"",
       errors:{}
       
  }

  async componentDidMount(){
    const {id} = this.props.match.params;
    //const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const res= await axios.get(`http://localhost:3004/patients/${id}`);
    const patient=res.data;
    this.setState({
      name:patient.name,
      serialNumber:patient.serialNumber,
      mobileNumber:patient.mobileNumber
    })
  }

  onChange = e => this.setState({[e.target.name]:e.target.value});
  
  onSubmit = async (dispatch,e) => {
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

    const updatePatient={
      name,
      serialNumber,
      mobileNumber
    } 
    const {id} = this.props.match.params;
    //const res  = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updatePatient);
    const res  = await axios.put(`http://localhost:3004/patients/${id}`,updatePatient);
    
    dispatch({
      type:'UPDATE_PATIENT',
      payload:res.data
    })


    //clear state
    this.setState({
      name:"",
      serialNumber:"",
      mobileNumber:"",
      errors:{}
    });
    this.props.history.push('/');
  }

  render() {
    const {name,serialNumber,mobileNumber,errors} =this.state;

    return(
      <Consumer>
        {value => {
          const {dispatch}=value;
          return(
            <div className="card mb-3">
            <div className="card-header">Edit Patient</div>
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
                <input type="submit" value="Update Patient" className="btn btn-light btn-block" />                       
              </form>
            </div>
          </div>
          );
        }}
      </Consumer>
    )
  }
}
export default EditPatient;