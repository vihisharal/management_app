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
  render() {
    const {patients} =this.state;
    return (
      <div>
        {patients.map(patient =>(
          <Patient 
            key={patient.id}
            patient={patient}  
          />
        ))}
      </div>
    )
  }
}


export default Patients;