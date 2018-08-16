import React from 'react';
import { Link } from 'react-router';

class BookingIndexItem extends React.Component {
  
  render () {
    return (
      <div className="trips-right-info">
        <ul>
          <li>Check In: {this.props.booking.check_in}</li>
          <li>Check Out: {this.props.booking.check_out}</li>
          <li>Guests: {this.props.booking.guests}</li>

        </ul>
      </div>     
    );
  }
}

export default BookingIndexItem ;