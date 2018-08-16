import React from 'react';
import BookingIndexContainer from '../booking/booking_index_container';

class Profile extends React.Component {


  render () {
    return (
      <div className="profile">
        <h1>
          {this.props.user.first_name} 
          &nbsp;
          {this.props.user.last_name}
         
        </h1>

        <h3>Trips</h3>
        
        <BookingIndexContainer /> 

      </div>
    );
  }
}

export default Profile;