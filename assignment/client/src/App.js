import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fruits from './Fruits';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Fruits} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
