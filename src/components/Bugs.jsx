import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBugs } from '../store/bugs';

export class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
});

const mapStateToProps = (state) => ({
  bugs: state.entities.bugs.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
