import {connect} from 'react-redux';
import CampsiteShow from './campsite_show';
import {fetchCampsite} from '../../actions/campsite_actions';

const mstp = (state, ownProps) => {  
  console.log(state.entities.campsites);
  return ({
    campsite: state.entities.campsites[ownProps.match.params.campsiteId]
  });
};

const mdtp = (dispatch) => ({
  fetchCampsite: (id) => dispatch(fetchCampsite(id))
});

export default connect(mstp, mdtp)(CampsiteShow);