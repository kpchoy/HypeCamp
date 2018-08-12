import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {createCampsite} from './util/campsites_api_util';


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {entities: 
            {users: { [window.currentUser.id]: window.currentUser }},
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END

    window.createCampsite = createCampsite({title: "yo", description: "yo", daily_rate: 20, state: "CA", lat: 23, lng: 23, picture_url: "yo"});

    const root = document.getElementById('root');
    ReactDOM.render(<Root store = {store} />, root);
});

