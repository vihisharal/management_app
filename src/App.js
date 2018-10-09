import React, { Component } from 'react';
import Patient from './components/Patient';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header hospitalName="Jivan Seva" />
        <div className="container">
          <Patient name="Mahesh Samant" serialNumber="1212232" mobileNumber="232-232-3223" />
          <Patient name="Rajesh Gondhale" serialNumber="4352642" mobileNumber="333-444-5555" />
        </div>
      </div>
    );
  }
}
//patients, displaying just serial number, name and mobile number
export default App;
