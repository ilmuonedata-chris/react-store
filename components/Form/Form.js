import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { setInput } from '../../actions/form';

export class Form extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  inputChange = (value, field) => {
    this.props.setInput(value, field);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div className="form1">
        <h1>Form 1</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.props.formReducer.name}
            onChange={e => this.inputChange(e.target.value, 'name')}
            margin="normal"
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  formReducer: state.formReducer,
});

const mapDispatchToProps = ({
  setInput: setInput,
});

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  formReducer: PropTypes.object.isRequired
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Form));
