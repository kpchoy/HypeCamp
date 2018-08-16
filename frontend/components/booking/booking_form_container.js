import {connect} from 'react-redux';
import {fetchBooking, createBooking, deleteBooking} from '../../actions/booking_actions';
import BookingForm from './booking_form';

const mstp = (state, ownProps) => {
  return ({
    
  });
};

const mdtp = (dispatch) => ({

});

export default connect(mstp, mdtp)(BookingForm);