import React, { Component } from 'react';
import './Styling.less';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';
import Ionicon from 'react-ionicons';

class Checkout extends Component {

  onConfirmClick = () => {
    console.log('test dewa');
    // history.push('/checkout/payment');
    this.props.history.push('/checkout/payment');
  };

  render() {
    return (
      <div id="checkout" className="componentWrapper">
        <h2 className="page-section text-center">Checkout</h2>
        <div className="row">
          <div className="col-xs-8">
            <div className="address-col left">
              <div className="flexCard">
                <div className="card">
                  <a href="#">
                    <Ionicon icon="md-close" className="close-icon" fontSize="20px" color="#000"/>
                  </a>
                  <div className="left" style={{backgroundImage: 'url(../../assets/images/philipp-kammerer.jpg)'}}>
                  </div>
                  <div className="right">
                    <p className="country">United States</p>
                    <p className="place">Artist Point</p>
                    <p className="price">$100</p>  
                  </div>
                </div>
              </div>
              <div className="flexCard">
                <div className="card">
                  <a href="#">
                    <Ionicon icon="md-close" className="close-icon" fontSize="20px" color="#000"/>
                  </a>
                  <div className="left">
                  </div>
                  <div className="right">
                    <p className="country">Brasil</p>
                    <p className="place">Angra dos Reis</p>
                    <p className="price">$140</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="address-col">
              <p className="title">Billing address</p>
              
              <div className="address">
                <div className="detail-wrapper">
                  <p className="name">Christian Ing</p>
                  <p className="street">Street</p>
                  <p className="zip-code">Zip Code 123456</p>
                  <p className="country">Indonesia</p>
                </div>
              </div>
              <hr />
              <p className="title">Delivery address</p>
              <div className="address">
                <div className="detail-wrapper">
                  <p className="name">Christian Ing</p>
                  <p className="street">Street</p>
                  <p className="zip-code">Zip Code 123456</p>
                  <p className="country">Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row bottom-details">
          <div className="col-xs-7">
            <p className="title">Estimated Delivery</p>
            <p className="sub-title">09.03.2018</p>
          </div>
          <div className="col-xs-2 shipping">
            <p className="title">Shipping</p>
            <p className="sub-title">Free</p>
          </div>
          <div className="col-xs-3 total">
            <p className="title">Total</p>
            <p className="sub-title">$ 219,25</p>
          </div>
        </div>
        <div className="btn btn-default pull-left back">
          <FontAwesome className="left-arrow" name='arrow-left' />
          BACK 
        </div>
        <div className="btn btn-default pull-right confirm" onClick={this.onConfirmClick}>
          CONFIRM 
          <FontAwesome className="right-arrow" name='arrow-right' />
        </div>
      </div>
    )
  }
}

export default withRouter(Checkout);