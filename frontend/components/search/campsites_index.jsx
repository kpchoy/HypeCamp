import React from 'react';
import Link from 'react-router';
import CampsiteIndexItem from './campsites_index_item';

class CampsiteIndex extends React.Component {
  
  render () {
    const { campsites } = this.props;
    return (

      <div>
        <h1>hello this is campsite index</h1>
        {campsites.map(campsite => (
          <CampsiteIndexItem key={campsite.id} campsite={campsite}/>
        ))}
      </div>
      
    );
  }
}

export default CampsiteIndex;