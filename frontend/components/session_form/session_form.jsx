import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.actionForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderFnameLname() {
    if (this.props.formType === 'Join Hypecamp' ) {
      return(
        <div>
        <h1>Join Hypecamp</h1>
        <p>Discover the best camping near me</p>

        <input type="text"
        placeholder="First name"
        className="signup-input" 
        value={this.state.first_name}
        onChange={this.update('first_name')}
        />

        <input type="text"
        placeholder="Last name"
        className="signup-input" 
        value={this.state.last_name}
        onChange={this.update('last_name')}
        /> 
      </div>

      );
    }
  }

  renderterms() {
    if (this.props.formType === 'Join Hypecamp') {
      return(
        <div>
          <p>By signing up, I agree to Hypecamp's terms and privacy policy.</p>

          <p>Already a Hipcamper? {this.props.otherForm}</p>
        </div>
      )
    }
  }

  renderWelcomeBack() {
    if (this.props.formType === 'login') {
      return(
        <div>
          <h1>Welcome back!</h1>
          <p>It's about time for another camping trip</p>
        </div>
      );
    }
  }

  renderNoAcct() {
    if (this.props.formType === 'login') {
      return(
        <div>
          <p>Don't have a Hypecammp account? {this.props.otherForm}</p>
        </div>
      ); 
    }
  }

 

  render() {
    return (
      <div className="login-form-container">
        
        <form onSubmit={this.handleSubmit} className="login-form-box">
          
          <br/>
          <div onClick={this.props.closeModal} className="close-x"></div>
          {this.renderFnameLname()}
          {this.renderWelcomeBack()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />

            {this.renderNoAcct()}
            {this.renderterms()}      

          </div>
        </form>
        
      </div>
    );
  }
}

export default withRouter(SessionForm);