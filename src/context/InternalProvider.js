import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "./createTransitionContext";
import getPagesPromises from "../utils/getPagesPromises";

class InternalProvider extends Component {
  state = {
    inTransition: false,
    transitionIdHistory: [],
    // event
    e: false,
    // exit
    exitDelay: 0,
    exitLength: 0,
    exitState: {},
    exitProps: {},
    exitTrigger: false,
    // entry
    entryDelay: 0,
    entryLength: 0,
    entryState: {},
    entryProps: {},
    entryTrigger: false,
    // state updates
    updateContext: obj => this.setState(obj)
  };

  componentDidMount() {
    this.state.updateContext(getPagesPromises());
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

InternalProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default InternalProvider;
