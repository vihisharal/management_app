import React, { Component } from 'react';
import Patients from './components/Patients';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header hospitalName="Jivan Seva" />
        <div className="container">
          <Patients />
        </div>
      </div>
    );
  }
}
//patients, displaying just serial number, name and mobile number
export default App;
