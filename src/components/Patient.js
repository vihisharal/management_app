import React, { Component } from 'react';
import PropType from 'prop-types';
import './patient.css';

class Patient extends Component {
  state={
    showPatientInfo:true
  };
  onDeleteClick=()=>{
    this.props.deleteClickHandler();
  }
  render() {
    const {name,serialNumber,mobileNumber}=this.props.patient;
    const {showPatientInfo} = this.state;
    return (//name="Vishal Gavali" serialNumber="1212232" mobileNumber="232-232-3223"
      <div className="card card-body mb-3">
        <h4>{name}{' '} 
          <i  
            onClick={()=>this.setState({showPatientInfo:!this.state.showPatientInfo}) } 
            className="fa fa-sort-down"
            style={{cursor:'pointer'}}
          />
          <i
            className="fa fa-times"
            style={{cursor:'pointer',float:'right',color:'red'}}
            onClick={this.onDeleteClick} 
          />
        </h4>
        {showPatientInfo? 
          (<ul className="list-group">
            <li className="list-group-item">Serial : {serialNumber}</li>
            <li className="list-group-item">Mobile : {mobileNumber}</li>
          </ul>)
          :null}
      
      </div>
    )
  }
}

Patient.propTypes={
  patient: PropType.object.isRequired,
  deleteClickHandler:PropType.func.isRequired
}


export default Patient; 