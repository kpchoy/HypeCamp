import React from 'react';

import CampsiteIndex from './campsites_index';
import CampsiteMap from '../campsite_map/campsite_map';

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchCampsites();
  }

  render() {

    if (!this.props.campsites) {
      return (<div>Loading...</div>);
    }

    const allsites = this.props.campsites.map(campsite => {
      return (
        {lat: campsite.lat, lng: campsite.lng, title: campsite.title}
      );
    });


    return (
      <div className="user-pane">
        
        <div className="left-pane">
          <CampsiteIndex campsites={this.props.campsites} fetchCampsite={this.props.fetchCampsite} />
        </div>
     
        <div className="right-pane">
          
          <CampsiteMap
            campsites={allsites}
            fetchCampsites={this.props.fetchCampsites}
            />
        </div>


        
      </div>
      );
    }
  }

export default Search;