import React, { Component } from 'react';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';
import Patients from './components/patients/Patients';
import AddPatient from './components/patients/AddPatient';
import About from './components/pages/About';
import Header from './components/layouts/Header';
import NotFound from './components/pages/NotFound'; 
import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App">
            <Header hospitalName="Jivan Seva" />
            <div className="container">
              <Switch>
                <Route exact path ="/" component={Patients} />
                <Route exact path ="/patient/add" component={AddPatient} />
                <Route exact path ="/about" component={About} />
                <Route  component={NotFound} />
              </Switch>
              {/* <AddPatient />
              <Patients /> */}
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
//patients, displaying just serial number, name and mobile number
export default App;
