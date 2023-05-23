// Homework:
// 1. Create a new react app
// 2. Create a component
// 3. Include that component in App.jsx
// 4. Pass a prop into the component at #2
// 5. Add some state to the App component
// Optional, update the state created at #5

import React, { Component } from 'react';
import PropComponent from './components/PropComponent'; 
class Homework extends Component {
  state = {UK_debt: 2409.4*1000000000000, inflation: false, currency: "USD"};

  onAdd = () => {
    this.setState({ UK_debt: this.state.UK_debt + 1000000});
  };

  onToggleMessage = () => {
    this.setState({ inflation: !this.state.inflation});
  }

  render() {
    const Style = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "16px",
      fontFamily: "Arial",
      fontSize: "68px"
    }
    const Debt = Number(this.state.UK_debt).toLocaleString('en');

    return (
      <>
      <p style={{fontSize: "40px"}}>UK Government Debt Counter</p>
      <p style={{fontSize: "36px"}}>Public debt amounts to:</p>
      <p style={Style} onClick={this.onAdd}>£ {Debt}</p>
      <button onClick={this.onToggleMessage}> Click to solve </button>
      <PropComponent inflation={this.state.inflation}/>
      </>
    )
    
  }

}
export default Homework;