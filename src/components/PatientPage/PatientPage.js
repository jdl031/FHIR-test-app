/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import PatientSearch from './PatientSearch';
import PatientTable from './PatientTable';
import s from './PatientPage.scss';
import withStyles from '../../decorators/withStyles';

const title = 'Patient Lookup';

@withStyles(s)
class PatientPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <PatientSearch />
          <hr>
          <PatientTable entries={this.state.entry}/>
        </div>
      </div>

    );
  }

}

export default PatientPage;
