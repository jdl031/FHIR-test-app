import React, { Component } from 'react';
import s from './PatientPage.scss';
import withStyles from '../../decorators/withStyles';
import PatientLabel from './PatientLabel.js';
import PatientDetail from './PatientDetail.js';

@withStyles(s)
class PatientTable extends Component {
  render() {
    const rows = this.props.entries && this.props.entries.map(function(entry, ix){
      const { given, family } = entry.name;
      const patName = given.join(' ') + ' ' + family.join(' ');
      return (
        <div key={ix}>
          <PatientLabel label={patName} />
          <PatientDetail entry={entry} />
        </div>
      );
    });

    return(
      <div className="patient_table">
        {rows}
      </div>
    );
  }
}

export default PatientTable;
