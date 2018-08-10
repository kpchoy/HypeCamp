import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className="greeting-header">
      <section className="left-greeting">
        <h1 className="hype-logo">HYPECAMP</h1>
        <div className="main-searchbar">
          <div className="search-icon" >
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <input type="text"
          placeholder="Search..."
          className="search-bar"
          />
        </div>
      </section>

      <section className="right-greeting">
        <a className="right-greeting-links" href="">Get $20</a>
        <a className="right-greeting-links" href="">Camp</a>
        <a className="right-greeting-links" href="">Host</a>
        <a className="right-greeting-links" href="">Scout</a>
        <a className="right-greeting-links" href="">About</a>
        <nav className="login-signup">
          <button className="signup-login-button" onClick={() => openModal('signup')}>Sign up</button>
          <button className="signup-login-button" onClick={() => openModal('login')}>Log in</button>
        </nav>
        <button className="host-button">Start hosting</button>
      </section>

    </div>
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