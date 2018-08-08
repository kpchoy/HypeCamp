import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Greeting from './greeting/greeting';
import Modal from './session_form/modal';

const App = () => (
  <div>
    <Modal /> 
    <header>
      <h1>App component jsx</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;