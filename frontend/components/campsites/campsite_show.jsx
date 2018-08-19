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
    const { campsite, campsitePhotos, reviews, guestId } = this.props;

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


            <div className="description-div">
              <section>
                <p className="show-body-description">Hosted by</p>
                <p>{campsite.first_name}</p>
              </section>

              <div className="description-amenities">
                <p>{campsite.description}</p>
                <section className="amenities">
                  <div className="amenities-left">
                    <p><i className="fas fa-parking"></i> Parking</p>
                    <p><i className="fas fa-tint"></i> Potable water</p>
                    <p><i className="fas fa-shower"></i> Shower</p>
                  </div>
                  <div className="amenities-right">
                    <p><i className="fas fa-female"></i> Group size up to 10</p>
                    <p><i className="fas fa-child"></i> Kid friendly</p>
                    <p><i className="fab fa-gripfire"></i> Fires allowed</p>
                  </div>
                </section>
              </div>
            </div>

          <div className="description-div">
            <section>
              <p className="show-body-description">Details</p>
            </section>
            <div>
              <section className="amenities">

                <div className="amenities-left">
                  <p><strong>Check in:</strong> After 2pm</p>
                  <p><strong>Check out:</strong> Before 12pm</p>
                  <p><strong>Cancelation policy:</strong> Moderate</p>
                </div>

                <div className="amenities-right">
                  <p><strong>On arrival:</strong> Go straing to camp</p>
                  <p><strong>Minimum nights:</strong> None</p>
                  <p><strong>Accept bookings:</strong> 6 months out</p>
                </div>

              </section>
            </div>
          </div>

          <div className="description-div">
            <section>
              <p className="show-body-description">Activities</p>
            </section>
            <div>
              <section className="activities">

                <div className="activities-left">
                  <p><i className="fas fa-bicycle"></i> Biking</p>
                  <p><i className="fas fa-swimmer"></i> Swimming</p>
                  <p><i className="fas fa-fish"></i> Fishing</p>
                </div>

                <div className="activities-right">
                  <p><i className="fab fa-wpexplorer"></i> Star gazing</p>
                  <p><i className="fas fa-paw"></i> Pet friendly</p>
                  <p><i className="fas fa-crow"></i> Wildlife watching</p>
                </div>

              </section>
            </div>
          </div>

          </div>

          <BookingFormContainer campsite={campsite} campsiteId={campsite.id}  guestId={guestId} />
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