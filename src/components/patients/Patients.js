import React, { Component } from 'react'

import Patient from './Patient';
import {Consumer} from '../../Context';

class Patients extends Component {
  render() {
    return(
      <Consumer>
        {value => {
          const {patients} =value;
          return(
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-success">Patients </span> List
              </h1>
              {patients.map(patient =>(
                <Patient 
                  key={patient.id}
                  patient={patient}
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