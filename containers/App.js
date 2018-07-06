import React, {Component} from 'react';
// import NavigationBar from '../components/NavigationBar/NavigationBar';
import NavGameBar from '../components/PlaystationPages/NavGameBar/NavGameBar';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage';
import HomePS from '../components/PlaystationPages/Home/Home';
import TravelNav from '../NavigationPath/TravelNav';
import CheckoutPath from '../NavigationPath/CheckoutPath';
import PSCheckoutPath from '../NavigationPath/PSCheckoutPath';
import '../style.less';
import Cart from '../components/PlaystationPages/Cart/Cart';
import RouterContainer from './RouterContainer';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="fullScreen">
          <NavGameBar />
          <RouterContainer />
        </div>
      </Router>
    )
  }
} 

export default App;