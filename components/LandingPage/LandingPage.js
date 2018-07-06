import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './styling.less';

class LandingPage extends Component {
  
  render() {
    return (
      <div className="bgImg">
        <div className="flexContainer">
          <p className="title">Travel & Tours</p>
          <p className="subtitle">Go travel with us! Explore our immense tours with a range of product choices at your hand.</p>
          <a href="travel">
            <Button className="explore">
              LEARN MORE
            </Button>
          </a>
        </div>
      </div>
    )
  }
}

export default LandingPage;