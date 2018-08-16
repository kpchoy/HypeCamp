import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router-dom';
 

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.booking;
    this.handleNumGuest.bind(this);
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


  render () {
    console.log(this.state);
    const {checkIn, checkOut, guests} = this.state;

    return (
      <div className="show-body-right">
        <form>
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
            <a href="">Request to Book</a>
          </section>
        </form>
      </div>     
    );
  }
}

export default withRouter(BookingForm);