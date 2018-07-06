import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Checkout from '../components/PlaystationPages/Checkout/Checkout';

const PSCheckoutPath = () => (
  <Switch>
    <Route exact path='/ps/checkout' component={Checkout}/>
  </Switch>
)


export default PSCheckoutPath;