import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reRenderPage = this.reRenderPage.bind(this);
  }

  reRenderPage() {
    this.setState({['body']: "", ['rating']: 1});
  }

  handleSubmit(e) {
    e.preventDefault();
   
    this.props.createReview(this.state).then(this.reRenderPage());
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <h3>Post a Review</h3>
        <form onSubmit={this.handleSubmit}>
          <label className="review-form-hb-rating">HypeBeast Rating: </label>
        
          <input
            className="hype-rating"
            type="number"
            min="1"
            max="5"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>

          <label className="review-form-hb-rating">Review:</label>
          <br/>

          <textarea
            className="review-textarea"
            cols="60"
            rows="10"
          
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input className="review-submit" type="submit" />
        </form>
        <button className="review-form-cancel" onClick={this.reRenderPage}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);