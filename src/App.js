import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import {GlobalStyles} from "./style";
import AddressForm from "./screens/AddressForm/index";
import ActivityForm from "./screens/ActivityForm/index";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles/>
        <Switch>
          <Route path="/activity-form" component={ActivityForm}/>
          <Route path="*" component={AddressForm}/>
        </Switch>
      </>
    );
  }
}

export default App;
