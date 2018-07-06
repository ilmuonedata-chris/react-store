import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styling.less';

class Travel extends Component {
  render() {
    return (
      <div className="componentWrapper">
        <div className="flexCard">
          <h2 className="popular-text">Top Highlights</h2>
          <a href="/travel/th001">
            <div className="card">
              <div className="left">
              </div>
              <div className="right">
                <p className="country">Brasil</p>
                <p className="place">Angra dos Reis</p>
                <p className="detail">Angra dos Reis is located in the southern part of Rio de Jenairo state. You can surf, be lethargic, and enjoy the sun as long as you want.</p>
                <p className="price">FROM $140</p>
              </div>
            </div>
          </a>
        </div>

        <h2 className="popular-text">Most Popular</h2>
        <div className="row placeCard">
          <div className="col-xs-3">
            <div className="inside-card">
              <img className="img-responsive" src="../../assets/images/philipp-kammerer.jpg" alt=""/>
              <div className="description">
                <p className="country">Brasil</p>
                <p className="place">Angra dos Reis</p>
                <p className="detail">Angra dos Reis is located in the southern part of Rio de Jenairo state. You can surf, be lethargic, and enjoy the sun as long as you want.</p>
                <p className="price">FROM $140</p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="inside-card">
              <img className="img-responsive" src="../../assets/images/mountain-cliff.jpg" alt=""/>
              <div className="description">
                <p className="country">Brasil</p>
                <p className="place">Angra dos Reis</p>
                <p className="detail">Angra dos Reis is located in the southern part of Rio de Jenairo state. You can surf, be lethargic, and enjoy the sun as long as you want.</p>
                <p className="price">FROM $140</p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="inside-card">
              <img className="img-responsive" src="../../assets/images/philipp-kammerer.jpg" alt=""/>
              <div className="description">
                <p className="country">Brasil</p>
                <p className="place">Angra dos Reis</p>
                <p className="detail">Angra dos Reis is located in the southern part of Rio de Jenairo state. You can surf, be lethargic, and enjoy the sun as long as you want.</p>
                <p className="price">FROM $140</p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="inside-card">
              <img className="img-responsive" src="../../assets/images/mountain-cliff.jpg" alt=""/>
              <div className="description">
                <p className="country">Brasil</p>
                <p className="place">Angra dos Reis</p>
                <p className="detail">Angra dos Reis is located in the southern part of Rio de Jenairo state. You can surf, be lethargic, and enjoy the sun as long as you want.</p>
                <p className="price">FROM $140</p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="inside-card">
              <img className="img-responsive" src="../../assets/images/philipp-kammerer.jpg" alt=""/>
              <div className="description">
                <p className="country">Brasil</p>
                <p className="place">Angra dos Reis</p>
                <p className="detail">Angra dos Reis is located in the southern part of Rio de Jenairo state. You can surf, be lethargic, and enjoy the sun as long as you want.</p>
                <p className="price">FROM $140</p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="inside-card">
              <img className="img-responsive" src="../../assets/images/mountain-cliff.jpg" alt=""/>
              <div className="description">
                <p className="country">Brasil</p>
                <p className="place">Angra dos Reis</p>
                <p className="detail">Angra dos Reis is located in the southern part of Rio de Jenairo state. You can surf, be lethargic, and enjoy the sun as long as you want.</p>
                <p className="price">FROM $140</p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="inside-card">
              <img className="img-responsive" src="../../assets/images/philipp-kammerer.jpg" alt=""/>
              <div className="description">
                <p className="country">Brasil</p>
                <p className="place">Angra dos Reis</p>
                <p className="detail">Angra dos Reis is located in the southern part of Rio de Jenairo state. You can surf, be lethargic, and enjoy the sun as long as you want.</p>
                <p className="price">FROM $140</p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="inside-card">
              <img className="img-responsive" src="../../assets/images/mountain-cliff.jpg" alt=""/>
              <div className="description">
                <p className="country">Brasil</p>
                <p className="place">Angra dos Reis</p>
                <p className="detail">Angra dos Reis is located in the southern part of Rio de Jenairo state. You can surf, be lethargic, and enjoy the sun as long as you want.</p>
                <p className="price">FROM $140</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Travel;