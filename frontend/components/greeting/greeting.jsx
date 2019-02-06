import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
     
    this.props.history.push('/search');
  }

  handleDemoLogin(e) {
    
    e.preventDefault();
    this.props.login({email: "Jim@gmail.com", password: "123456"});
  }

  render () {
    const { currentUser, logout, openModal, login } = this.props;
    

    const sessionLinks = () => (
      <div className="greeting-header">
      <section className="left-greeting">
        <Link to="/" className="link-hype-logo" >
          <h1 className="hype-logo">HYPECAMP</h1>
        </Link>
          
        <button className="main-searchbar" onSubmit={this.handleSubmit}>
          <div className="search-bar-items">
            <div className="search-icon" >
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <p className="search-bar">
              Search Campsites
            </p>
          </div>
        </button>
          
      </section>

      <section className="right-greeting">
        <a className="right-greeting-icons" href="http://www.linkedin.com/in/kevin-choy-b5714b133" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a className="right-greeting-icons" href="https://github.com/kpchoy/HypeCamp" target="_blank"><i className="fab fa-github-square"></i></a>
        <Link className="right-greeting-links" to="/search">Scout</Link>
        <Link className="right-greeting-links" to="/about">About</Link>
        <nav className="login-signup">
          <button className="signup-login-button" onClick={() => openModal('signup')}>Sign up</button>
          <button className="signup-login-button" onClick={() => openModal('login')}>Log in</button>
        </nav>
        <button className="demo-button" onClick={this.handleDemoLogin}>Demo Login</button>
      </section>

    </div>
  );
  
    const personalGreeting = () => (
      <div className="greeting-header">
        <section className="left-greeting">
          <Link to="/" className="link-hype-logo" >
            <h1 className="hype-logo">HYPECAMP</h1>
          </Link>
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
          <li><Link className="right-greeting-links" to="/search">Scout</Link></li>
          <li><Link className="right-greeting-links" to="/about">About</Link></li>
        
          <li>
            <div className="dropdown">
              <button className="dropbtn"><i className="fa fa-tree" aria-hidden="true"></i></button>
              <div className="dropdown-content">
                <Link to="/profile">View Profile</Link>
                <a href="#">Help & FAQ</a>
                <a href="#" onClick={logout}>Log out</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
    
    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
  }
}


export default withRouter(Greeting);