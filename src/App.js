import React, { Component } from 'react';
import Patients from './components/patients/Patients';
import AddPatient from './components/patients/AddPatient';
import Header from './components/layouts/Header';
import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header hospitalName="Jivan Seva" />
          <div className="container">
            <AddPatient />
            <Patients />
          </div>
        </div>
      </Provider>
    );
  }
}
//patients, displaying just serial number, name and mobile number
export default App;
