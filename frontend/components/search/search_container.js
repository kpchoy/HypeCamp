import { connect } from 'react-redux';
import {fetchCampsite, fetchCampsites} from '../../actions/campsite_actions';
import Search from './search';

const mstp = state => ({
  campsites: Object.values(state.entities.campsites)  
});

const mdtp = dispatch => ({
  fetchCampsites: () => dispatch(fetchCampsites()),
  fetchCampsite: (id) => dispatch(fetchCampsite(id))
});

export default connect(
  mstp,
  mdtp
)(Search);