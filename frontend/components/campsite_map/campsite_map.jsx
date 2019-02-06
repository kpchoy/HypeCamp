import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


class CampsiteMap extends React.Component {
  constructor(props) {
    super(props);
    this.addCampsite = this.addCampsite.bind(this);
  }
  
  componentDidMount() {
    
    const map = ReactDOM.findDOMNode(this.refs.map);
    
    const options = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 7
    };

    this.map = new google.maps.Map(map, options);

    // add a movement listener
    this.listenForMove();
    // we are going to add a map marker for each burrito place now

    
    
    this.props.campsites.forEach(this.addCampsite);
  
  }

  componentWillReceiveProps(newProps) {
    // debugger
    if (newProps.campsites.length !== this.props.campsites) {
      newProps.campsites.forEach(this.addCampsite);
    }
  }

  addCampsite(campsite) {
    const pos = new google.maps.LatLng(campsite.lat, campsite.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    marker.addListener('click', () => {
      alert(`clicked on: ${campsite.title}`);
    });
  }

  listenForMove() {
    /* 
     * we listen for the map to emit an 'idle' event, it does this when
     * the map stops moving
     */
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();

      // console.log('center',
      //   bounds.getCenter().lat(), 
      //   bounds.getCenter().lng());
      // console.log("north east",
      //   bounds.getNorthEast().lat(), 
      //   bounds.getNorthEast().lng());
      // console.log("south west",
      //   bounds.getSouthWest().lat(), 
      //   bounds.getSouthWest().lng());
    });
  }

  
  render() {
    console.log(this.props.campsites)

    return (
    
      <div id='map-container' ref='map'/>

    );
  }
}

export default withRouter(CampsiteMap);