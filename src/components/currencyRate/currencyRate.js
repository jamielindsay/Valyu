import React, { Component } from "react";
import "./currencyRate.css";

export default class CurrencyRate extends Component {
  constructor(props) {
    super(props);

    let flagPath = require("../../assets/flags/" +
      props.currency.toLowerCase() +
      ".svg");
    this.state = {
      flag: flagPath,
      currency: props.currency,
      value: props.value,
      change: props.change
    };
  }

  value() {
    return (
      <div className="rateValue">
        <div className="actual">{this.state.value}</div>
        <div>1 CNY/{this.state.currency}</div>
      </div>
    );
  }

  render() {
    if (this.state.change > 0) {
      var style = { color: "green" };
    } else if (this.state.change === 0) {
      style = {};
    } else {
      style = { color: "red" };
    }

    return (
      <div className="rateContainer">
        <img className="flag" src={this.state.flag} alt="" />
        <div className="rateCurrency">{this.state.currency}</div>
        {this.value()}
        <div className="rateChange" style={style}>
          {this.state.change}%
        </div>
      </div>
    );
  }
}
