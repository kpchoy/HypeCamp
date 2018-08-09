import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mstp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mdtp = dispatch => {
  return {
    actionForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Log In!
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mstp, mdtp)(SessionForm);
