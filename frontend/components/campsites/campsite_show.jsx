import React from 'react';
import Link from 'react-router';
import BookingFormContainer from '../booking/booking_form_container';
import CampsiteReviewsIndex from '../reviews/reviews_campsite_index';
import CampsiteReviewForm from '../reviews/review_form_container';

class CampsiteShow extends React.Component {
  componentDidMount() {
    this.props.fetchCampsite(this.props.match.params.campsiteId);
  }  

  render() {
    const { campsite, campsitePhotos, reviews } = this.props;

    if (!campsite) {
    return (<div>Loading...</div>);
    }

    return (
      <div className="main-camp-show">
        <ul className="upper-images">
        <li><img src={campsitePhotos[0] ? campsitePhotos[0].image_url : ''} /></li>
        <li><img src={campsitePhotos[1] ? campsitePhotos[1].image_url : ''} /></li>
        <li><img src={campsitePhotos[2] ? campsitePhotos[2].image_url : ''} /></li>

        </ul>
        
        <section className="show-body">
          
          <div className="show-body-left">
            <p className="show-body-state">{campsite.state}</p>
            <h1>{campsite.title}</h1>
            <p className="show-body-description">Description</p>
            <p>{campsite.description}</p>
          </div>

          <BookingFormContainer campsite={campsite} campsiteId={campsite.id}/>
        </section>

        <div>
          <CampsiteReviewsIndex reviews={reviews}/>
        </div>

        <div>
          <CampsiteReviewForm campsiteId={campsite.id}/>
        </div>
      </div>
    );

  }

}

export default CampsiteShow;