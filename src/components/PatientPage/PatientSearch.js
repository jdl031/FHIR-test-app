import React, { Component, PropTypes } from 'react';
import s from './PatientPage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class PatientSearch extends Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.refs.searchText.value);
  }

  onChange() {
    this.props.onChange(this.refs.searchText.value);
  }

  render() {
    return (
      <form on-submit={this.onSubmit.bind(this)}>
        <input type="text" ref="searchText" placeholder="Patient name..." value={this.props.searchText} onChange={this.onChange.bind(this)}/>
        <button>Search</button>
      </form>
    );
  }
}

export default PatientSearch;
