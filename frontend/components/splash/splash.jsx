import React from 'react';
import Link from 'react-router';
import SplashItem from './splash_item';

class Splash extends React.Component {

  render() {
    return (
      <div >
        
        <section >
          <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/main_photo.jpg" className="main-img"/>
        </section>

        <h1>this is splash</h1>
        <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/white-side-mountain-01.webp" />
       

       
      </div>
    );
  }
}

export default Splash;