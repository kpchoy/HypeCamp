import React from 'react';
import { Link } from 'react-router';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBookings();
  }

  render () {
    console.log(this.props)
    return (
      <div className="trips-main">
        <div className="trips-left">
          
            {this.props.campsites.map((campsite) => (
              <ul className="trips-left-site" key={campsite.id}>
                <img className="trips-imgs" src={campsite.thumbnail} />
                <li>{campsite.title}</li>
              </ul>
            ))}
          
        </div>

        <div className="trips-right">
          {this.props.bookings.map((booking) => (
            <BookingIndexItem 
            key={booking.id} 
            booking={booking}  
            />
          ))}
        </div>

      </div>     
    );
  }
}

export default BookingIndex ;