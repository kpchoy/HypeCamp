import React from 'react';
import Link from 'react-router';
import CampsiteIndexItem from './campsites_index_item';

class CampsiteIndex extends React.Component {
  
  render () {
    const { campsites } = this.props;
    return (

      <div className="campsite-index">
        {campsites.map(campsite => (
          <CampsiteIndexItem key={campsite.id} campsite={campsite} />
        ))}
      </div>
      
    );
  }
}

export default CampsiteIndex;