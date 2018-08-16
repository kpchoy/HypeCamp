import {connect} from 'react-redux';
import {fetchBookings} from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const mstp = (state) => {
  return ({
    bookings: Object.values(state.entities.bookings),
    campsites: Object.values(state.entities.campsites)
  });
};

const mdtp = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookings())
});

export default connect(mstp, mdtp)(BookingIndex);