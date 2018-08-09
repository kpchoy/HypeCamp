import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Greeting from './greeting/greeting';
import Modal from './session_form/modal';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <Modal /> 
    <header>
      <GreetingContainer />
    </header>
   
   
  </div>
);

export default App;