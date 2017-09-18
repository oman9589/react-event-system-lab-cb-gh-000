import React from 'react';

class Keypad extends React.Component {
  render() {
    handleInput = () => {
      console.log('Entering password...');
    }

    return (
      <input> type="password"
      onKeyUp={this.handleInput}
      </input>
    );
  }
}

export default Keypad;
