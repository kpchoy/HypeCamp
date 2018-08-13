import React from 'react';
import Link from 'react-router';

class Splash extends React.Component {
  
  componentDidMount() {
    this.props.fetchCampsites();
  }

  render() {
    console.log(this.props.campsites[0]);
    return (
      <div>
        <h1>this is splash</h1>
        <section>
          Main picture  
        </section>

        {this.props.campsites.map((campsite) => (
          <p>{campsite.title}</p>
        ))}
      </div>
    );
  }
}

export default Splash;