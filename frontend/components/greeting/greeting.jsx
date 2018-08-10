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

      <ul className="right-greeting">
        <li><a className="right-greeting-links" href="">Host</a></li>
        <li><a className="right-greeting-links" href="">Scout</a></li>
        <li><a className="right-greeting-links" href="">Camp</a></li>
        <li><a className="right-greeting-links" href="">Get $20</a></li>
        <li><a className="right-greeting-links" href="">About</a></li>
        <li><a className="loggedin-start-hosting" href="">Start hosting</a></li>
        <li><a className="right-greeting-links" href="">Messages</a></li>
        <li>
          <a>
            <i class="fa fa-tree" aria-hidden="true"></i>
          </a>
          
        </li>
        <li><button className="logout-button" onClick={logout}>Log out</button></li>
      </ul>
    </div>
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};


export default Greeting;