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

  validateForm() {
    return (
      this.state.username.length > 2 &&
      this.state.password.length > 2 &&
      this.state.password === this.state.comfirmPassword &&
      this.state.termsAndConditions
    );
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={e => {
          e.preventDefault();

          if (!this.validateForm()) {
            alert('Invalid input');
            return;
          }
          
          alert(JSON.stringify(this.state, null, '\t'))
        }}>
          <h1>Register!</h1>
          <div className="form-group">
            <label htmlFor="email-input">
              Email address
            </label>
            <input
              id="email-input"
              type="text"
              className="form-control"
              placeholder="Enter email"
              onChange={e => this.setState({ username: e.target.value })}
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
              onChange={e => this.setState({ password: e.target.value })}
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
              onChange={e => this.setState({ comfirmPassword: e.target.value })}
            />
          </div>
          <label>
            <input
              id="terms-and-conditions-check"
              type="checkbox"
              onChange={e => this.setState({ termsAndConditions: e.target.checked })}
            /> Forfeit soul
          </label>
          <button className="btn btn-primary btn-block">
            Register!
          </button>
        </form>
      </div>
    );
  }
}

export default App;
