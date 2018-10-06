import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      comfirmPassword: '',
      termsAndConditions: false
    };
  }

  validateForm(){
    return (
      this.state.username.length > 4 &&
      this.state.password.length > 4 &&
      this.state.password === this.state.comfirmPassword &&
      this.state.termsAndConditions
    );
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={e => {
          e.preventDefault();

          console.log('state', JSON.stringify(this.state));
          console.log('submitted');
        }}>
          <h1>Sign in!</h1>
          <div className="form-group">
            <label htmlFor="email-input">
              Email address
            </label>
            <input
              id="email-input"
              type="text"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-input">
              Password
            </label>
            <input
              id="password-input"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password-input">
              Confirm password
            </label>
            <input
              id="confirm-password-input"
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>
          <label>
            <input 
              id="terms-and-conditions-check"              
              type="checkbox"
            /> Forfeit soul
          </label>
          <button className="btn btn-primary btn-block">
            Sign in!
          </button>
        </form>
      </div>
    );
  }
}

export default App;
