import { connect } from 'react-redux';

import { createReview } from '../../actions/campsite_actions';
import ReviewForm from './review_form';
import { openModal } from '../../actions/modal_actions';


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
  createReview: review => dispatch(createReview(review)),
  openModal: modal => dispatch(openModal(modal))

});

export default connect(mstp,mdtp)(ReviewForm);