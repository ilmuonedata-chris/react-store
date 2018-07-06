import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMessage, addTask } from '../../actions/message';
import InputPreview from '../InputPreview';
import style from './style.less';

class Todo extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props);
    // dataLayer.push({
    //   'testVar': 'testing'
    // });
    // analytics.track('AnotherSegmentTest', {
    //   location: 'Todo.js',
    //   type: 'pageEvent'
    // });
    // dataLayer.push({
    //   'event': 'purchase',
    //   'ecommerce': {
    //     'purchase': {
    //       'actionField': {
    //         'id': 'T12345',                         // Transaction ID. Required for purchases and refunds.
    //         'affiliation': 'Online Store',
    //         'revenue': '35.43',                     // Total transaction value (incl. tax and shipping)
    //         'tax':'4.90',
    //         'shipping': '5.99',
    //         'coupon': 'SUMMER_SALE'
    //       },
    //       'products': [{                            // List of productFieldObjects.
    //         'name': 'Test Product',     // Name or ID is required.
    //         'id': '12345',
    //         'price': '15.25',
    //         'brand': 'Google',
    //         'category': 'Apparel',
    //         'variant': 'Gray',
    //         'quantity': 1,
    //         'coupon': ''                            // Optional fields may be omitted or set to empty string.
    //       }]
    //     }
    //   }
    // });

    dataLayer.push({
      'ecommerce': {
        'purchase': {
          'actionField': {
            'id': 'T12345',                         // Transaction ID. Required for purchases and refunds.
            'affiliation': 'Online Store',
            'revenue': '35.43',                     // Total transaction value (incl. tax and shipping)
            'tax':'4.90',
            'shipping': '5.99',
            'coupon': 'SUMMER_SALE'
          },
          'products': [{                            // List of productFieldObjects.
            'name': 'Test Purchase Product',     // Name or ID is required.
            'id': '7634567',
            'price': '15.25',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Gray',
            'quantity': 1,
            'coupon': ''                            // Optional fields may be omitted or set to empty string.
           }
          ]
        }
      }
    });
    
    this.onAddTask = this.onAddTask.bind(this);
  }

  _onChange = (value) => {
    this.props.setMessage(value);
  }

  onAddTask(val) {
    console.log('clicked', val);
    this.props.addTask(val);
    console.log(this.props.todoReducer);
  }

  render() {
    const { message } = this.props.messageReducer;
    const { task } = this.props.todoReducer;
    return (
      <div className="todoWrapper">
        <div className="row">
          <InputPreview 
            value={message} 
            onChange={this._onChange}
          />
          <button className="addTodo" onClick={() => this.onAddTask(message)}>
            Add new test
          </button>
        </div>
        <div className="detail">
          {this.props.todoReducer.map(t => {
            return <p key={t.id}>{t.task}</p>
          })}
        </div>
      </div>
    )
  }
}

Todo.propTypes = {
  todoReducer: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  messageReducer: state.messageReducer,
  todoReducer: state.todoReducer,
});

export default connect(mapStateToProps, { setMessage, addTask })(Todo)
