import * as  APIUtil from '../util/booking_api_util';
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

export const fetchBooking = (id) => dispatch => (
  APIUtil.fetchBooking(id).then((booking) => dispatch(receiveBooking(booking)))
);

const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking 
});

export const createBooking = (booking) => dispatch => (
  APIUtil.createBooking(booking).then((booking) => dispatch(receiveBooking(booking)))
);

export const deleteBooking = (bookingId) => dispatch => (
  APIUtil.deleteBooking(bookingId).then((booking) => dispatch(removeBooking(bookingId)))
);

const removeBooking = (bookingId) => ({
  type: REMOVE_BOOKING,
  bookingId 
});

export const fetchBookings = () => dispatch => (
  APIUtil.fetchBookings().then(payload => dispatch(receiveBookings(payload)))
);

const receiveBookings = (payload) => ({
  type: RECEIVE_BOOKINGS,
  payload 
});
