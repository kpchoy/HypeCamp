import React from 'react';
import Link from 'react-router';

class CampsiteShow extends React.Component {
  componentDidMount() {
    this.props.fetchCampsite(this.props.match.params.campsiteId);
  }  

  componentWillReceiveProps(nextProps) {
    if (this.props.campsite.id != nextProps.match.params.campsiteId) {
      this.props.fetchCampsite(nextProps.match.params.campsiteId);
    }
  }

  render() {
    const { campsite } = this.props;
    console.log(this.props);
    if (!campsite) {
    return (<div>Loading...</div>);
    }

    return (
      <div>
        <h1>hello this is campsite show</h1>
      </div>
    );

  }

}

export default CampsiteShow;