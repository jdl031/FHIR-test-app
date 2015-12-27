import React, { Component } from 'react';
import s from './PatientPage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class PatientSearch extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Patient name..." />
        <button>Search</button>
      </form>
    );
  }
}

export default PatientSearch;
