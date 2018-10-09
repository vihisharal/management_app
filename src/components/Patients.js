import React, { Component } from 'react'
import uniqeID  from 'uniqid';
import Patient from './Patient';


class Patients extends Component {
  state={
    patients:[
     {
       id:uniqeID(),
       name:"abc",
       serialNumber:"abs123",
       mobileNumber:"123-345-4567"
      },
      {
        id:uniqeID(),
        name:"pqr",
        serialNumber:"pqr123",
        mobileNumber:"234-445-3433"
       }

    ]
  }
  deletePatient = (id) =>{
    const {patients} =this.state;
    const newPatients=patients.filter(patient=> patient.id!==id);
    this.setState({
      patients:newPatients
    });
  }

  render() {
    const {patients} =this.state;
    return (
      <React.Fragment>
        {patients.map(patient =>(
          <Patient 
            key={patient.id}
            patient={patient}
            deleteClickHandler={this.deletePatient.bind(this,patient.id)}  
          />
        ))}
      </React.Fragment>
    )
  }
}


export default Patients;