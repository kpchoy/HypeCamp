import React from 'react';

class ReviewsCampsiteIndex extends React.Component {
  render () {
     
    return (
      <div className="reviews-index">

      <h1>Reviews</h1>
     
        {this.props.reviews.map((review) => {
          
          return (
          <div className="review-item" key={review.id}>
            <div className="review-icon">
             <div className="icon-circle">
                <i className="fa fa-tree" aria-hidden="true"></i>
             </div>
            </div>
            <div className="review-item-text">

              <h2>{review.first_name}</h2>
              <h3 className="rating">HypeBeasts Rating: {review.rating}/5</h3>
              <h4 className="review-body">{review.body}</h4>
            </div>
          </div>
          );
        })}
      
      </div>
    );
  }
}

export default ReviewsCampsiteIndex;