export const fetchCampsites = () => (
  $.ajax({
    url: "/api/campsites",
    type: "GET",
    error: (err) => console.log(err)
  })
);

export const fetchCampsite = (id) => (
  $.ajax({
    url: `/api/campsites/${id}`,
    type: "GET"
  })
);

export const createCampsite = (campsite) => (
  $.ajax({
    url: "/api/campsites",
    type: "POST",
    data: {campsite}
  })
);