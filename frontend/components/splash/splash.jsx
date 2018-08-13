import React from 'react';
import Link from 'react-router';
import SplashItem from './splash_item';

class Splash extends React.Component {

  render() {
    return (
      <div >
        
        <section className="uppersplash">
          <div className="uppersplash-l">
            <p className="find-txt">
              Find yourself outside.
            </p>
            <p className="splash-small">
              Book unique camping experiences on 15 campsites!
            </p>

            <div className="s-main-searchbar">
              <div className="s-search-icon" >
                <i class="fas fa-location-arrow"></i>
              </div>
              <input type="text"
              placeholder="Camping near me..."
              className="s-search-bar"
              />
            </div>

          </div>
          <div className="uppersplash-r">
            <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/main_photo.jpg" className="main-img"/>
          </div>
        </section>

        <h1>this is splash</h1>
       
       

       
      </div>
    );
  }
}

export default Splash;