import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Form from '../Form/Form';
import AnotherForm from '../AnotherForm/AnotherForm';
import Button from '@material-ui/core/Button';

export class SliderForm extends Component {

  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <Form />
        <AnotherForm />
        <div className="buttonWrapper">
          <Button size="medium" variant="raised" color="primary">
            Previous
          </Button>
          <Button size="medium" variant="raised" color="primary">
            Next
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = ({
  
});

SliderForm.propTypes = {
  classes: PropTypes.object.isRequired,
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SliderForm));