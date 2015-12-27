import React, { Component } from 'react';
import s from './PatientPage.scss';
import withStyles from '../../decorators/withStyles';
import PatientLabel from './PatientLabel.js';
import PatientDetail from './PatientDetail.js';

@withStyles(s)
class PatientTable extends Component {
  render() {
    var rows = [];
    var patName = "";
    this.props.entries.forEach(function(entry){
      patName = entry.name.given.join[" "] + " " + entry.name.family.join[" "];
      rows.push(<PatientLabel label={patName} key={entry.fullUrl}/>);
      rows.push(<PatientDetail entry={entry} key={entry.fullUrl}/>);
    });
    return(
      <div class="patient_table">
        {rows}
      </div>
    );
  }
}

export default PatientTable;
