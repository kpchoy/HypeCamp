import {connect} from 'react-redux';
import {createBooking, deleteBooking} from '../../actions/booking_actions';
import BookingForm from './booking_form';
import { openModal } from '../../actions/modal_actions';


const mstp = (state, ownProps) => {
  
  const booking = { campsiteId: ownProps.campsiteId, guestId: state.session.id, guests: 1, checkIn: '', checkOut: '' };
  return ({ 
    booking,
  });
};


const mdtp = (dispatch) => ({
  createBooking: (booking) => dispatch(createBooking(booking)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mdtp)(BookingForm);