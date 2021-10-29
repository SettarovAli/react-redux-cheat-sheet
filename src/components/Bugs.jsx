import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBugs, resolveBug, selectUnresolvedBugs } from '../store/bugs';

export class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>
            <p>{bug.description}</p>
            <button onClick={() => this.props.resolveBug(bug.id)}>
              Resolve bug
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id)),
});

const mapStateToProps = (state) => ({
  bugs: selectUnresolvedBugs(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
