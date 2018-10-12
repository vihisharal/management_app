import React, { Component } from 'react';
import PropType from 'prop-types';
import {Consumer} from '../../Context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Patient extends Component {
  state={
    showPatientInfo:false
  };
  onDeleteClick=async (id,dispatch)=>{
    try {
      //await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      await axios.delete(`http://localhost:3004/patients/${id}`);
      dispatch({type:'DELETE_PATIENT',payload:id});        
    } catch (error) {
      dispatch({type:'DELETE_PATIENT',payload:id});  
    }
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
                className="fa fa-sort-down ml-4"
                style={{cursor:'pointer'}}
              />
              <i
                className="fa fa-times"
                style={{cursor:'pointer',float:'right',color:'red'}}
                onClick={this.onDeleteClick.bind(this,id,dispatch)} 
              />
              <Link to={`patient/edit/${id}`}>
                <i 
                  className="fa fa-pencil mr-4"
                  style={{
                    cursor:'pointer',
                    float:'right',
                    color:'black'
                  }}
                />
              </Link>
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
}


export default Patient; 