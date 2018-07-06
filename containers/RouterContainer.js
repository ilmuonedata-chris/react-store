import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage';
import HomePS from '../components/PlaystationPages/Home/Home';
import TravelNav from '../NavigationPath/TravelNav';
import CheckoutPath from '../NavigationPath/CheckoutPath';
import PSCheckoutPath from '../NavigationPath/PSCheckoutPath';
import Cart from '../components/PlaystationPages/Cart/Cart';
import { connect } from 'react-redux';
import { setLocation } from '../actions/navigation'

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
    // Send location to redux store, used by NavGameBar.js
    this.props.setLocation(location.pathname);
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

const mapStateToProps = (state) => ({
  navigationReducer: state.navigationReducer,
});

const mapDispatchToProps = ({
  setLocation: setLocation,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouterContainer));