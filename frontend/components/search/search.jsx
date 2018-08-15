import React from 'react';

import CampsiteIndex from './campsites_index';
import CampsiteMap from '../campsite_map/campsite_map';

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchCampsites();
  }

  render() {
    return (

      <div className="user-pane">
     
        <div className="left-half">
          <h5>Click Map to Find Campsite!</h5>
          <CampsiteMap
            campsites={[
              { lat: 37.775785, lng: -122.445979, name: "Papalote" },
              { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
              { lat: 37.781899, lng: -122.410426, name: "Cancun" }
            ]}
            
            />
        </div>

        <div className="right-half">
          <CampsiteIndex campsites={this.props.campsites} fetchCampsites={this.props.fetchCampsite} />
        </div>

        
      </div>
      );
    }
  }

export default Search;