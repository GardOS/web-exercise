import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Fruits from './Fruits';
import FruitChat from './FruitChat';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary sticky-top">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="text-light nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/FruitChat"} className="text-light nav-link">FruitChat</Link>
            </li>
            <li className="nav-item">
              <Link to={"/NotAPage"} className="text-light nav-link">404</Link>
            </li>
          </ul>
        </nav>
        <br/>
        <Switch>
          <Route exact path="/" component={Fruits} />
          <Route exact path="/fruitChat" component={FruitChat} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
