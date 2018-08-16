import React from 'react';
import { Link } from 'react-router';

class BookingIndexItem extends React.Component {

  render () {
    return (
      <div className="">
        <ul>
          <li>{this.props.booking.check_in}</li>
          <li>{this.props.booking.check_out}</li>
          <li>{this.props.booking.guests}</li>

        </ul>
      </div>     
    );
  }
}

export default BookingIndexItem ;