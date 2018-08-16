import {connect} from 'react-redux';
import CampsiteShow from './campsite_show';
import {fetchCampsite} from '../../actions/campsite_actions';


const mstp = (state, ownProps) => {  
  return ({
    campsite: state.entities.campsites[ownProps.match.params.campsiteId],
    campsitePhotos: Object.values(state.entities.campsitePhotos)
  });
};

const mdtp = (dispatch) => ({
  fetchCampsite: (id) => dispatch(fetchCampsite(id))
});

export default connect(mstp, mdtp)(CampsiteShow);