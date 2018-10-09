import React, { Component } from 'react';
import uniqeID  from 'uniqid';

const Context = React.createContext();

const reducer=(state,action)=>{
  switch(action.type){
    case 'DELETE_PATIENT':
      return{
        ...state,
        patients:state.patients.filter(patient=> patient.id!==action.payload)
      };
    default :
      return state;
  }
}

export class Provider extends Component{

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
       },
       {
        id:uniqeID(),
        name:"xyz",
        serialNumber:"xyz123",
        mobileNumber:"898-121-6463"
       }       
    ],
    dispatch:action => this.setState(state => reducer(state,action))
    
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