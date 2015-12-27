import React, { Component } from 'react';
import s from './PatientPage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class PatientLabel extends Component {
  render() {
    return(
      <h2>{this.props.label}</h2>
    );
  }
}

export default PatientLabel;
