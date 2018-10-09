import React, { Component } from 'react'

import Patient from './Patient';
import {Consumer} from '../Context';

class Patients extends Component {
/*   deletePatient = (id) =>{
    const {patients} =this.state;
    const newPatients=patients.filter(patient=> patient.id!==id);
    this.setState({
      patients:newPatients
    });
  } */
  render() {
    return(
      <Consumer>
        {value => {
          const {patients} =value;
          return(
            <React.Fragment>
            {patients.map(patient =>(
              <Patient 
                key={patient.id}
                patient={patient}
                /* deleteClickHandler={this.deletePatient.bind(this,patient.id)} */  
              />
            ))}
          </React.Fragment>            
          )
        }}
      </Consumer>
    )
  }
}


export default Patients;