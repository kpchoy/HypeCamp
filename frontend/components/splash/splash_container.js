import {connect} from 'react-redux';
import Splash from './splash';
import {fetchCampsites, fetchCampsite} from '../../actions/campsite_actions';

const mstp = (state) => {
  return ({
    campsites: Object.values(state.entities.campsites)  
  });
};

const mdtp = (dispatch) => ({
  fetchCampsites: () => dispatch(fetchCampsites()),
  fetchCampsite: (id) => dispatch(fetchCampsite(id))
});

export default connect(mstp, mdtp)(Splash);