import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  componentDidMount() {
    this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    const appState = this.context.store.getState();

    return (
      <div className="App">
        <h1>Learn React</h1>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object
};

export default App;
