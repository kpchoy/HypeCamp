import {connect} from 'react-redux';
import CampsiteShow from './campsite_show';
import {fetchCampsite} from '../../actions/campsite_actions';

const mstp = ({entities}) => {
  return ({
    campsite: entities.campsites.campsite,
    campsite_photos: entities.campsites.campsite_photos
  });
};

const mdtp = (dispatch) => ({
  fetchCampsite: (id) => dispatch(fetchCampsite(id))
});

export default connect(mstp, mdtp)(CampsiteShow);