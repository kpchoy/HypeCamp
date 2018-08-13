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

            <ul className="search-links-holder">
              <li className="li-c-i-o"><a className="notextdec" href="">Check-In</a></li>
              <li className="li-c-i-o"><a className="notextdec" href="">Check-Out</a></li>
              <li className="splash-search-button">
                <i className="fa fa-search" aria-hidden="true"></i>
                <a className="notextdec" href=""> Search</a>
              </li>
            </ul>

          </div>
          <div className="uppersplash-r">
            <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/main_photo.jpg" className="main-img"/>
          </div>
        </section>

        <section className="splash-bot">
          <h1 className="discover-camp">Discover camping...</h1>
          <ul className="camp-row">
            <li>
              <a href="">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/01-splah-soto.webp" />
                <p>Tent Camping</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/02-splash-wtto.webp" />
                <p>Ocean Views</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/03-splash-gbm.webp" />
                <p>Glamping</p>
              </a>
            </li>
          </ul>


          <ul className="camp-row">
            <li>
              <a href="">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/04-splash-tmg.webp" />
                <p>Tree House</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/05-splash-fgl.webp" />
                <p>Grazing Land</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/06-splash-fff.webp" />
                <p>Big Sur</p>
              </a>
            </li>
          </ul>


          <ul className="camp-row">
            <li>
              <a href="">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/07-splash-bbr.webp" />
                <p>Mount Rainier</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/08-splash-rdbc.webp" />
                <p>Utah</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/09-splash-wwns.webp" />
                <p>Idaho</p>
              </a>
            </li>
          </ul>

        </section>
       
       

       
      </div>
    );
  }
}

export default Splash;