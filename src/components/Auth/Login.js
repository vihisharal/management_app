import React, { Component } from 'react';
import isValid from './Auth';

class Login extends Component {
  state ={
    email:'',
    password:''    
  }
  onChange = e => this.setState({[e.target.name]:e.target.value});
  
  onSubmit = async (e) => {
    e.preventDefault();
    const{email,password}=this.state;

    //hard coded email,password for login
    if(isValid(email,password)){
      console.log('correct');
      this.props.history.push('/');  
    }
    else{  return;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-success">
                  <i className="fa fa-lock mr-4"></i>
                  Login
                </span>
              </h1>
              <form onSubmit={this.onSubmit.bind(this)} >
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    required 
                    value={this.state.email}
                    onChange={this.onChange}
                   />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    required 
                    value={this.state.password}
                    onChange={this.onChange}
                   />
                </div>
                <input type="submit" className="btn btn-light btn-block" value="Submit" />                
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login;