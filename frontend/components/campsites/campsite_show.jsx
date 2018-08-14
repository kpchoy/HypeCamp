import React from 'react';
import Link from 'react-router';

class CampsiteShow extends React.Component {
  componentDidMount () {
    this.props.fetchCampsite(15);
  }

  render() {
    console.log(this.props)
    return (
      <h1>hello this is campsite show</h1>
    );

  }

}

export default CampsiteShow;