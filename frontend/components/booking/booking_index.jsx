import React from 'react';
import { Link } from 'react-router';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBookings();
  }

  render () {
    return (
      <div className="">
        {this.props.bookings.map((booking) => (
          <BookingIndexItem key={booking.id} booking={booking} />
        ))}

      </div>     
    );
  }
}

export default BookingIndex ;