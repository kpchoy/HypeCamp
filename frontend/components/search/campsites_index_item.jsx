import React from 'react';
import { Link } from 'react-router-dom';

const CampsiteIndexItem = ({ campsite }) => {

  return (
    <div>
      {campsite.title}
    </div>
  );
};

export default CampsiteIndexItem;