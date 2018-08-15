import { connect } from 'react-redux';
import {fetchCampsite, fetchCampsites} from '../../actions/campsite_actions';
import Profile from './profile';

const mstp = (state, ownProps) => {
  return ({
    user: state.entities.users[state.session.id]  
  });
};

const mdtp = dispatch => ({
  fetchCampsites: () => dispatch(fetchCampsites()),
  fetchCampsite: (id) => dispatch(fetchCampsite(id))
});

export default connect(
  mstp,
  mdtp
)(Profile);