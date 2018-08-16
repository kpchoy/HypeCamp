export const fetchBooking = (id) => (
  $.ajax({
    url: `/api/bookings/${id}`,
    type: "GET"
  })
);

export const createBooking = (booking) => (
  $.ajax({
    url: '/api/bookings',
    type: "POST",
    data: {booking}
  })
);

export const deleteBooking = (id) => (
  $.ajax({
    url: `/api/bookings/${id}`,
    type: "DELETE"
  })
);

