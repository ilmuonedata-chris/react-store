import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage';
import HomePS from '../components/PlaystationPages/Home/Home';
import TravelNav from '../NavigationPath/TravelNav';
import CheckoutPath from '../NavigationPath/CheckoutPath';
import PSCheckoutPath from '../NavigationPath/PSCheckoutPath';
import Cart from '../components/PlaystationPages/Cart/Cart';
import PropTypes from 'prop-types';

class RouterContainer extends Component {

  componentWillMount() {
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    this.handleLocationChange(history.location);
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }

  handleLocationChange = (location) => {
    // Do something with the location
    console.log('location', location);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePS} />
        <Route path='/travel' component={TravelNav} />
        <Route path='/checkout' component={CheckoutPath} />
        <Route path='/ps/checkout' component={PSCheckoutPath} />
        <Route exact path='/ps/cart' component={Cart}/>
      </Switch>
    );
  }
}
export default withRouter(RouterContainer);