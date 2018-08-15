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
      <div className="errors-render">
        {this.props.errors[0]}
      </div>
    );
  }

  renderFnameLname() {
    if (this.props.formType === 'Join Hypecamp' ) {
      return(
        <div>
        <h1 className="sf-join-title">Join Hypecamp</h1>
        <p className="sf-join-small">Discover the best camping near me</p>

        <section className="sf-fn-ln">
          
            <input type="text"
            placeholder="First name"
            className="sf-fn" 
            value={this.state.first_name}
            onChange={this.update('first_name')}
            />

          
            <input type="text"
            placeholder="Last name"
            className="sf-ln" 
            value={this.state.last_name}
            onChange={this.update('last_name')}
            /> 

        </section>
      </div>

      );
    }
  }

  renderterms() {
    if (this.props.formType === 'Join Hypecamp') {
      return(
        <div className="sf-join-bot-master">
          <p className="">By signing up, I agree to Hypecamp's terms and privacy policy.</p>

          <p className="">Already a Hipcamper? {this.props.otherForm}</p>
        </div>
      )
    }
  }

  renderWelcomeBack() {
    if (this.props.formType === 'Log In') {
      return(
        <div>
          <h1 className="sf-join-title">Welcome back!</h1>
          <p className="sf-join-small">It's about time for another camping trip</p>
        </div>
      );
    }
  }

  renderNoAcct() {
    if (this.props.formType === 'Log In') {
      return(
        <div className="sf-join-bot-master">
          <p>Don't have a Hypecammp account? {this.props.otherForm}</p>
        </div>
      ); 
    }
  }
 

  render() {
    return (
      <div className="login-form-container">
        
        <form onSubmit={this.handleSubmit} className="sf-main">
          
          <br/>
          <div onClick={this.props.closeModal} className="close-x"></div>
          {this.renderWelcomeBack()}
          {this.renderFnameLname()}
          <div className="login-form">
            
            
            <label>
              <input type="email"
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
            <button className="sf-join-login" type="submit">{this.props.formType}</button>

            {this.renderterms()}

            {this.renderNoAcct()}

          </div>
        {this.renderErrors()}
        </form>
        
      </div>
    );
  }
}

export default withRouter(SessionForm);