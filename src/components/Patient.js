import React, { Component } from 'react';
import PropType from 'prop-types';
import './patient.css';

class Patient extends Component {
  render() {
    const {name,serialNumber,mobileNumber}=this.props;
    return (//name="Vishal Gavali" serialNumber="1212232" mobileNumber="232-232-3223"
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Serial : {serialNumber}</li>
          <li className="list-group-item">Mobile : {mobileNumber}</li>
        </ul>      
      </div>
    )
  }
}

Patient.propTypes={
  name: PropType.string.isRequired,
  serialNumber:PropType.string.isRequired,
  mobileNumber:PropType.string.isRequired
}

export default Patient; 