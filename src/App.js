import React, { Component } from 'react';
import { HashRouter as BRouter, Route ,Switch } from 'react-router-dom';
import Patients from './components/patients/Patients';
import AddPatient from './components/patients/AddPatient';
import EditPatient from './components/patients/EditPatient';
import About from './components/pages/About';
import Login from './components/Auth/Login';
import Header from './components/layouts/Header';
import NotFound from './components/pages/NotFound'; 
import { Provider } from './Context';
import Test from './components/Test/Test';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <BRouter>
          <div className="App">
            <Header hospitalName="Jivan Seva" />
            <div className="container">
              <Switch>
                <Route exact path ="/" component={Patients} />
                <Route exact path ="/patient/add" component={AddPatient} />
                <Route exact path ="/patient/edit/:id" component={EditPatient} />
                <Route exact path ="/about" component={About} />
                <Route exact path ="/login" component={Login} />
                <Route exact path ="/test" component={Test} />
                <Route  component={NotFound} />
              </Switch>
            </div>
          </div>
        </BRouter>
      </Provider>
    );
  }
}
//patients, displaying just serial number, name and mobile number
export default App;
