import React, { Component } from 'react';
import './Styling.less';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';
import Ionicon from 'react-ionicons';

class Payment extends Component {

  onBackClick = () => {
    console.log('test dewa');
    // history.push('/checkout/payment');
    this.props.history.goBack();
  };

  render() {
    return (
      <div id="payment" className="componentWrapper">
        <h2 className="page-section text-center">Payment</h2>
        <div className="row">
          <div className="col-xs-4">Visa</div>
          <div className="col-xs-4">Master Card</div>
          <div className="col-xs-4">Paypal</div>
        </div>
        <div className="btn btn-default pull-left back" onClick={this.onBackClick}>
          <FontAwesome className="left-arrow" name='arrow-left' />
          BACK 
        </div>
        <div className="btn btn-default pull-right confirm">
          PAY NOW 
          <FontAwesome className="right-arrow" name='arrow-right' />
        </div>
      </div>
    )
  }
}

export default withRouter(Payment);