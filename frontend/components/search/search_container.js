import { connect } from 'react-redux';

import Search from './search';

const mstp = state => ({
  campsites: (state.entities.campsites)  
});

const mdtp = dispatch => ({

});

export default connect(
  mstp,
  mdtp
)(Search);