import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className="greeting-header">
      <section className="left-greeting">
        <a className="link-hype-logo" href="/">
          <h1 className="hype-logo">HYPECAMP</h1>
        </a>
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
        <a className="right-greeting-icons" href="http://www.linkedin.com/in/kevin-choy-b5714b133" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a className="right-greeting-icons" href="https://github.com/kpchoy/HypeCamp" target="_blank"><i className="fab fa-github-square"></i></a>
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
        <li>
          <a className="right-greeting-icons" href="http://www.linkedin.com/in/kevin-choy-b5714b133" target="_blank"><i className="fab fa-linkedin"></i></a>
        </li>
        <li>
          <a className="right-greeting-icons" href="https://github.com/kpchoy/HypeCamp" target="_blank"><i className="fab fa-github-square"></i></a>
        </li>
        <li><a className="right-greeting-links" href="">Scout</a></li>
        <li><a className="right-greeting-links" href="">About</a></li>
        <li><a className="loggedin-start-hosting" href="">Start hosting</a></li>
        <li><a className="right-greeting-links" href="">Messages</a></li>
      
        <li>
          <div className="dropdown">
            <button className="dropbtn"><i className="fa fa-tree" aria-hidden="true"></i></button>
            <div className="dropdown-content">
              <a href="#">View Profile</a>
              <a href="#">Your Trips</a>
              <a href="#">Help & FAQ</a>
              <a href="#" onClick={logout}>Log out</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};


export default Greeting;