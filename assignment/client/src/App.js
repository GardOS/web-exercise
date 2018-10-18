import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Fruits from './Fruits';
import FruitChat from './FruitChat';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm bg-primary">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to={"/"} className="text-light nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to={"/FruitChat"} className="text-light nav-link">FruitChat</Link>
            </li>
            <li class="nav-item">
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
