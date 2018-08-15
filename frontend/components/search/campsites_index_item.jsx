import React from 'react';
import { Link } from 'react-router-dom';

const CampsiteIndexItem = ({ campsite }) => {

  return (
    <div className="campsite-index-item">
      <Link className="campsite-index-item-link"
       to={`campsite/${campsite.id}`}>
        <img className="campsite-index-item-img" src={campsite.thumbnail}/>
        <p>{campsite.state}</p>
        <h1>
          {campsite.title}
        </h1>


      </Link>
    </div>
  );
};

export default CampsiteIndexItem;