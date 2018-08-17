export const fetchBooking = (id) => (
  $.ajax({
    url: `/api/bookings/${id}`,
    type: "GET"
  })
);

export const fetchBookings = () => (
  $.ajax({
    url: "/api/bookings",
    type: "GET"
  })
);

export const createBooking = (booking) => (
  $.ajax({
    url: '/api/bookings',
    type: "POST",
    data: {booking: {
      campsite_id: booking.campsiteId,
      guest_id: booking.guestId,
      guests: booking.guests,
      check_in: booking.checkIn,
      check_out: booking.checkOut,
    }}
  })
);

export const deleteBooking = (id) => (
  $.ajax({
    url: `/api/bookings/${id}`,
    type: "DELETE"
  })
);

