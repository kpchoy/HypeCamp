import * as CampsiteAPIUtil from '../util/campsites_api_util'; 

export const RECEIVE_CAMPSITES = "RECEIVE_CAMPSITES";

export const fetchCampsites = () => dispatch => (
  CampsiteAPIUtil.fetchCampsites().then((campsites) => dispatch(receiveCampsites(campsites)))
);

const receiveCampsites = (campsites) => ({
  type: RECEIVE_CAMPSITES,
  campsites 
});

export const RECEIVE_CAMPSITE = "RECEIVE_CAMPSITE";

export const fetchCampsite = (id) => dispatch => (
  CampsiteAPIUtil.fetchCampsite(id).then((campsite) => dispatch(receiveCampsite(campsite)))
);

const receiveCampsite = (payload) => ({
  type: RECEIVE_CAMPSITE,
  payload
});

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const createReview = (review) => dispatch => (
  CampsiteAPIUtil.createReview(review).then((review) => dispatch(receiveReview(review)))
);

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});