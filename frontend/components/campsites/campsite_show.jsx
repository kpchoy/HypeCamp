import React from 'react';
import Link from 'react-router';

class CampsiteShow extends React.Component {
  componentDidMount() {
    this.props.fetchCampsite(this.props.match.params.campsiteId);
  }  

 

  render() {
    const { campsite, campsitePhotos } = this.props;

    if (!campsite) {
    return (<div>Loading...</div>);
    }

    return (
      <div className="main-camp-show">
        <ul className="upper-images">
          <li><img src={campsitePhotos[0].image_url} /></li>
          <li><img src={campsitePhotos[1].image_url} /></li>
          <li><img src={campsitePhotos[3].image_url} /></li>
        </ul>
        
        <section className="show-body">
          <div className="show-body-left">
            <h1>{campsite.title}</h1>
          </div>
          <div className="show-body-right">
            <div className="show-body-price">
              <h1>$ {campsite.daily_rate}</h1>
              <p>per night</p>
            </div>
            
            <ul>
              <li>
                <h3>Check In</h3>
                
              </li>
              <li>
                <h3>Check Out</h3>
                
              </li>
              <li>
                <h3>Guests</h3>
              </li>
            </ul>
            <section>
              <a href="">Request to Book</a>
            </section>
          </div>
        </section>
      </div>
    );

  }

}

export default CampsiteShow;