import React from 'react';
import SplashItem from './splash_item';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/search');
  }

  render() {
    return (
      <div >
        
        <section className="uppersplash">
          <div className="uppersplash-l">
            <p className="find-txt">
              Find yourself outside.
            </p>
            <p className="splash-small">
              Book unique camping experiences on 9 campsites!
            </p>

            <div className="s-main-searchbar">
              <div className="s-search-icon" >
                <i className="fas fa-location-arrow"></i>
              </div>
              <form onSubmit={this.handleSubmit}>

                <input type="text"
                placeholder="Camping near me..."
                className="s-search-bar"
                />
              </form>
            </div>

            <ul className="search-links-holder">
              <li className="li-c-i-o"><a className="notextdec" href="">Check-In</a></li>
              <li className="li-c-i-o"><a className="notextdec" href="">Check-Out</a></li>
              <li className="splash-search-button">
                <i className="fa fa-search" aria-hidden="true"></i>
                <Link className="notextdec" to="/search"> Search</Link>
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
              <Link to="/campsite/1">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/01-splah-soto.webp" />
                <p>Tent Camping</p>
              </Link>
            </li>
            <li>
              <Link to="/campsite/2">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/02-splash-wtto.webp" />
                <p>Ocean Views</p>
              </Link>
            </li>
            <li>
              <Link to="/campsite/3">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/03-splash-gbm.webp" />
                <p>Glamping</p>
              </Link>
            </li>
          </ul>


          <ul className="camp-row">
            <li>
              <Link to="/campsite/4">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/04-splash-tmg.webp" />
                <p>Tree House</p>
              </Link>
            </li>
            <li>
              <Link to="/campsite/5">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/05-splash-fgl.webp" />
                <p>Grazing Land</p>
              </Link>
            </li>
            <li>
              <Link to="/campsite/6">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/06-splash-fff.webp" />
                <p>Big Sur</p>
              </Link>
            </li>
          </ul>


          <ul className="camp-row">
            <li>
              <Link to="/campsite/7">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/07-splash-bbr.webp" />
                <p>Mount Rainier</p>
              </Link>
            </li>
            <li>
              <Link to="/campsite/8">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/08-splash-rdbc.webp" />
                <p>Utah</p>
              </Link>
            </li>
            <li>
              <Link to="/campsite/9">
                <img src="https://s3-us-west-1.amazonaws.com/hypecamp-dev/09-splash-wwns.webp" />
                <p>Idaho</p>
              </Link>
            </li>
          </ul>

        </section>
       
       

       
      </div>
    );
  }
}

export default Splash;