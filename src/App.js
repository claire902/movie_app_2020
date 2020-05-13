import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        {isLoading ? "Loading" : "We ara ready"}
      </div>
    );
  }
}

export default App;
