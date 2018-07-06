import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import SliderForm from '../SliderForm/SliderForm';

class Home extends Component {
  render() {
    return (
      <div className="componentWrapper">
        <Todo />
      </div>
    )
  }
}

export default Home;