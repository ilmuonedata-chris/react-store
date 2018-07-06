import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Travel from '../components/Travel/Travel';
import TravelDetail from '../components/TravelDetail/TravelDetail';

const TravelNav = () => (
  <Switch>
    <Route exact path='/travel' component={Travel}/>
    <Route path='/travel/:number' component={TravelDetail}/>
  </Switch>
)


export default TravelNav;