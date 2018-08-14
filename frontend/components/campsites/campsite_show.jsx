import React from 'react';
import Link from 'react-router';

class CampsiteShow extends React.Component {
  componentDidMount() {
    this.props.fetchCampsite(this.props.match.params.campsiteId);
  }  



  render() {
    const { campsite, campsitePhotos } = this.props;

    if (!campsite) {
    return (<div>Loading...</div>);
    }

    return (
      <div>
        <h1>hello this is campsite show</h1>
        <p>{campsite.title}</p>
        
      </div>
    );

  }

}

export default CampsiteShow;