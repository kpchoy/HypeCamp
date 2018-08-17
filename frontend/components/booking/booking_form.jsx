import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router-dom';
 

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.booking;
    this.handleNumGuest = this.handleNumGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reRenderPage = this.reRenderPage.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleNumGuest(step) {
    return e => {
      if (step === "+" && (this.state.guests < 10)) {
        this.setState({guests: (this.state.guests + 1)});
      } else if (step == "-" && (this.state.guests > 1)) {
        this.setState({guests: (this.state.guests - 1)});
      }
    };
  }

  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state)
      .then(() => this.reRenderPage())
      .then(() => this.props.history.push('/profile'));
    
  }
  
  reRenderPage() {
    this.setState({['checkIn']: "", ['checkOut']: "", ['guests']: 1});
  }

  render () {
    
    const {checkIn, checkOut, guests} = this.state;

    return (
      <div className="show-body-right">
          <div className="show-body-price">
            <h1>$ {this.props.campsite.daily_rate}</h1>
            <p>per night</p>
          </div>
          
          <ul>
            <li className="show-body-right-checkio">
              <h3>Check In</h3>
              <input 
                type="date"
                value={checkIn}
                onChange={this.update('checkIn')}/>
            </li>
            <li className="show-body-right-checkio">
              <h3>Check Out</h3>
              <input 
                type="date"
                value={checkOut}
                onChange={this.update('checkOut')}/>
            </li>
            <li className="guest-num-cont">
              <h3>Guests</h3>
              <div className="guest-adder-sub">
                <button
                onClick={this.handleNumGuest('-')}
                >-</button>
                <p className="guest-num-holder">{guests}</p>
                <button
                onClick={this.handleNumGuest('+')}
                >+</button>
              </div>
            </li>
          </ul>
          <section>
            <button onClick={this.handleSubmit}>Request to Book</button>
          </section>
      </div>     
    );
  }
}

export default withRouter(BookingForm);