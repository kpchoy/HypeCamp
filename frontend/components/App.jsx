import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Greeting from './greeting/greeting';
import Modal from './session_form/modal';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route, Switch, Redirect} from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import CampsiteShowContainer from './campsites/campsite_show_container';
import SearchContainer from './search/search_container';
import ProfileContainer from './profile/profile_container';
import About from './about/about';

const App = () => (
  <div>
    <Modal /> 
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route path="/campsite/:campsiteId" component={CampsiteShowContainer} />
      <Route exact path="/search" component={SearchContainer} />
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/about" component={About}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;