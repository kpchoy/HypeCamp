import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mstp = ( { entities: {users}, session } ) => ({
  currentUser: users[session.id],
});

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mdtp)(Greeting);