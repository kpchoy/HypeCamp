import { connect } from 'react-redux';

import { createReview } from '../../actions/campsite_actions';
import ReviewForm from './review_form';

const mstp = (state, ownProps) => {
  return({
    review: {
      rating: 5,
      body: '',
      author_id: state.session.id,
      campsite_id: ownProps.campsiteId 
    }
  });
};

const mdtp = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(mstp,mdtp)(ReviewForm);