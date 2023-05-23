import React, { Component } from 'react';

class PropComponent extends Component {
    state = {currency: "GBP"}

    render() { 
        return <h1>{this.props.inflation ? "Inflate away" : "Go bankrupt and try again"}</h1>;
    }
}
 
export default PropComponent;