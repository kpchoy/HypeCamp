import React from 'react';


class Profile extends React.Component {


  render () {
    console.log(this.props);
    return (
      <div className="profile">
        <h1>
          {this.props.user.first_name} 
          &nbsp;
          {this.props.user.last_name}
         
        </h1>

        <h3>Upcoming Trips</h3>
        
        <h4>Past Trips</h4>

      </div>
    );
  }
}

export default Profile;