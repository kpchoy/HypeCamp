import React from 'react';
import { Link } from 'react-router';

class BookingForm extends React.Component {
  render () {
    return (
      <div className="show-body-right">
        <form>
          <div className="show-body-price">
            <h1>$ {this.props.campsite.daily_rate}</h1>
            <p>per night</p>
          </div>
          
          <ul>
            <li>
              <h3>Check In</h3>
              
            </li>
            <li>
              <h3>Check Out</h3>
              
            </li>
            <li>
              <h3>Guests</h3>
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

export default BookingForm;