import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Checkout from '../components/Checkout/Checkout';
import Payment from '../components/Payment/Payment';

const CheckoutPath = () => (
  <Switch>
    <Route exact path='/checkout' component={Checkout}/>
    <Route path='/checkout/payment' component={Payment}/>
  </Switch>
)


export default CheckoutPath;