import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Greeting from './greeting/greeting';
import Modal from './session_form/modal';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route, Switch} from 'react-router-dom';
import CampSiteIndexContainer from './campsites/campsites_index_container';
import SplashContainer from './splash/splash_container';
import CampsiteShowContainer from './campsites/campsite_show_container';

const App = () => (
  <div>
    <Modal /> 
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route path="/campsite/:campsiteId" component={CampsiteShowContainer} />
    </Switch>
  </div>
);

export default App;