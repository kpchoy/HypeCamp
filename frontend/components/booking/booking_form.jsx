import React from 'react';
import { Link } from 'react-router';
import NumericInput from 'react-numeric-input';
 

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="show-body-right">
        <form>
          <div className="show-body-price">
            <h1>$ {this.props.campsite.daily_rate}</h1>
            <p>per night</p>
          </div>
          
          <ul>
            <li>
              <h3>Check In</h3>
            </li>
            <li>
              <h3>Check Out</h3>
            </li>
            <li>
              <h3>Guests</h3>
              <NumericInput 
                value="4" 
                min={ 0 } 
                max={ 10 } 
                step={ 1 } 
                precision={ 0 } 
                size = { 3 }
                mobile
              />
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

export default BookingForm;