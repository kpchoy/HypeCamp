import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  render () {
    return (
      <div className="about-main">
        <h1>Find yourself outside</h1>
        <h2> Hypecamp is everywhere you want to camp. Search, discover and book ranches,
        farms, vineyards, nature preserves & public sites for camping across the U.S.</h2>
        <p>  </p>
        <div>
          <h4>Our mission</h4>
          <h2>Get more people outside</h2>
          <p>Our overall mission is to get more people outside and, more specifically, to inspire the next generation of people who are passionate about exploring AND protecting our lands. Spending time outdoors has proven health benefits and fosters a deeper connection to the awesome, wild world out there. And we’re firm believers that people will only protect what they connect to and care about.</p>
        </div>
      </div>
    );
  }
}

export default About;