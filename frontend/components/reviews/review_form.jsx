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
    console.log(this.state);
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>HypeBeast Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>

          <label>Comment</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input type="submit" />
        </form>
        <button onClick={this.reRenderPage}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);