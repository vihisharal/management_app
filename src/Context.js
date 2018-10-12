import React, { Component } from 'react';
//import uniqeID  from 'uniqid';
import axios from 'axios';

const Context = React.createContext();

const reducer=(state,action)=>{
  switch(action.type){
    case 'DELETE_PATIENT':
      return{
        ...state,
        patients:state.patients.filter(patient=> patient.id!==action.payload)
      };
      case 'ADD_PATIENT':
      return{
        ...state,
        patients:[action.payload,...state.patients]
      };
      case 'UPDATE_PATIENT':
      return{
        ...state,
        patients:state.patients.map(patient=> patient.id===action.payload.id ? (patient=action.payload):patient)
      };
      default :
      return state;
  }
}

export class Provider extends Component{

  state={
    patients:[
     /* {
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
       },
       {
        id:uniqeID(),
        name:"xyz",
        serialNumber:"xyz123",
        mobileNumber:"898-121-6463"
       } */       
    ],
    dispatch:action => this.setState(state => reducer(state,action))
    
  }

  async componentDidMount(){
    //const res= await axios.get('https://jsonplaceholder.typicode.com/users');
    const res= await axios.get('http://localhost:3004/patients');
    this.setState({patients:res.data});
  }  

  render(){
      return(
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      );
  }
}

export const Consumer =Context.Consumer;