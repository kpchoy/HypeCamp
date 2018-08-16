import React from 'react';
import BookingIndexContainer from '../booking/booking_index_container';

class Profile extends React.Component {
 

  render () {
    const splitDate = this.props.user.created_at.slice(0, 10);
    const month =`${splitDate.slice(5, 8)}`;
    const day =`${splitDate.slice(8, 10)}${splitDate.slice(4, 5)}`;
    const year = `${splitDate.slice(0, 4)}`;
    const date =`${month}${day}${year}`;
    return (
      <div className="profile">
        <h1>
          {this.props.user.first_name} 
          &nbsp;
          {this.props.user.last_name}
         
        </h1>

        <p><i className="fas fa-heart"></i> HypeCamper Since: {month}{day}{year} </p>

        <h3>Trips</h3>
        
        <BookingIndexContainer /> 

      </div>
    );
  }
}

export default Profile;