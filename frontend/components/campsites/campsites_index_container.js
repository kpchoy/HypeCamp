import {connect} from 'react-redux';
import Campsites from './campsites_index';
import {fetchcampsites, fetchcampsite} from '../../actions/campsite_actions';

const mstp = ({entities: campsites}) => ({
  campsites
});

const mdtp = (dispatch) => ({
  fetchcampsites: () => dispatch(fetchcampsites()),
  fetchcampsite: (id) => dispatch(fetchcampsite(id))
});

export default connect(mstp, mdtp)(Campsites);