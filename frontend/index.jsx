import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    window.login = SessionApiUtil.login;
    window.logout = SessionApiUtil.logout;
    window.signup = SessionApiUtil.signup;

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to hypecamp</h1>, root);
});

