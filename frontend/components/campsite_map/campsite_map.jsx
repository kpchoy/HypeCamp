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

    const hack = 
    [{lat: 37.8651, lng: -119.5483, title: "Sanctuary Of The Oaks Site #10"},
    {lat: 37.2017, lng: -122.4018, title: "Wild Tender Tipi Ocean View"},
    {lat: 37.913, lng: -122.6996, title: "Glamping @ Big Mesa Farmstead"},
    {lat: 38.2061, lng: -122.6829, title: "Treehouse Magic Grove"},
    {lat: 37.7497, lng: -122.7779, title: "Free Grazing Land"},
    {lat: 36.44, lng: -121.6657, title: "FollyFootFrolic"},
    {lat: 47.1088, lng: -122.1192, title: "Bumps & Bruzas Riverfront"},
    {lat: 37.6839, lng: -112.4104, title: "Running Deer TIPI near Bryce Canyon"},
    {lat: 43.7542, lng: -111.1066, title: "Winter wonderland near skiing"}];

   
    hack.forEach(this.addCampsite);
    
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

      console.log('center',
        bounds.getCenter().lat(), 
        bounds.getCenter().lng());
      console.log("north east",
        bounds.getNorthEast().lat(), 
        bounds.getNorthEast().lng());
      console.log("south west",
        bounds.getSouthWest().lat(), 
        bounds.getSouthWest().lng());
    });
  }

  
  render() {

    return (
    
      <div id='map-container' ref='map'/>

    );
  }
}

export default withRouter(CampsiteMap);