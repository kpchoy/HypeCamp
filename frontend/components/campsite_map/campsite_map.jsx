import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 6
};

class CampsiteMap extends React.Component {
  
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }
  
  
  render() {
    console.log(this.props);
    return (
      <div ref={ map => this.mapNode = map } id="map-container">
      </div>
    );
  }
}

export default withRouter(CampsiteMap);
