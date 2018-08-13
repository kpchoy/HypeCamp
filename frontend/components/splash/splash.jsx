import React from 'react';
import Link from 'react-router';

class Splash extends React.Component {
  
  componentDidMount() {
    this.props.fetchCampsites();
  }
  
  render() {
    return (
      <div>
        <h1>this is splash</h1>
        {this.props.campsites.map((campsite) => (
          <p>{campsite.title}</p>
        ))}
      </div>
    );
  }
}

export default Splash;