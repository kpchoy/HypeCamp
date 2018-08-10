import {connect} from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mstp = ({errors}) => ({
  errors: errors.session, 
  formType: 'Log In'
});

const mdtp = dispatch => ({
  actionForm: (user) => dispatch(login(user)),
  otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Sign Up!
      </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(SessionForm);