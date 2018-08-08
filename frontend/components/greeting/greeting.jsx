import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('signup')}>Sign up</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('login')}>Log in</button>
    </nav>
  );
  const personalGreeting = () => (
    <header className="header-group">
      <h1 className="header-name">Welcome to HypeCamp, 
      {currentUser.first_name} {currentUser.last_name}!</h1>

      <button className="header-button" onClick={logout}>Log Out</button>
    </header>
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};


export default Greeting;