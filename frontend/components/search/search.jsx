import React from 'react';

import CampsiteIndex from './campsites_index';
import CampsiteMap from '../campsite_map/campsite_map';


const Search = ({ campsites }) => (
  <div className="user-pane">
     
    <div className="left-half">
      <h5>Click Map to Find Campsite!</h5>
      <CampsiteMap
        campsites={campsites}
       
      />
    </div>

    <div className="right-half">
      <CampsiteIndex campsites={campsites} />
    </div>

    
  </div>
);

export default Search;