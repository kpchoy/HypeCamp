import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router-dom';
 

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.booking;

  }

  update(property) {
     
    return e => this.setState({
      [property]: e.target.value
    });
  }



  render () {
    console.log(this.state);
    return (
      <div className="show-body-right">
        <form>
          <div className="show-body-price">
            <h1>$ {this.props.campsite.daily_rate}</h1>
            <p>per night</p>
          </div>
          
          <ul>
            <li className="show-body-right-checkio">
              <h3>Check In</h3>
              <input 
                type="date"/>
            </li>
            <li className="show-body-right-checkio">
              <h3>Check Out</h3>
              <input 
                type="date"/>
            </li>
            <li className="guest-num-cont">
              <h3>Guests</h3>
              
            </li>
          </ul>
          <section>
            <a href="">Request to Book</a>
          </section>
        </form>
      </div>     
    );
  }
}

export default withRouter(BookingForm);