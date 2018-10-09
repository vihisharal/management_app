import React, { Component } from 'react';
import PropType from 'prop-types';
import {Consumer} from '../Context';
import './patient.css';


class Patient extends Component {
  state={
    showPatientInfo:true
  };
  onDeleteClick=(id,dispatch)=>{
    dispatch({type:'DELETE_PATIENT',payload:id});
    /* this.props.deleteClickHandler(); */
  }
  render() {
    const {name,serialNumber,mobileNumber,id}=this.props.patient;
    const {showPatientInfo} = this.state;
    return (
      <Consumer>
        {value=>{
          const {dispatch} =value;
          return(
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
                onClick={this.onDeleteClick.bind(this,id,dispatch)} 
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
        }}
      </Consumer>
    )
  }
}

Patient.propTypes={
  patient: PropType.object.isRequired
  /* deleteClickHandler:PropType.func.isRequired */
}


export default Patient; 