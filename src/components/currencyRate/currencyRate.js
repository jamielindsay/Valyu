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
      base: props.base,
      value: props.value,
      change: props.change,
      selected: props.selected
    };
  }

  value() {
    return (
      <div className="rateValue">
        <div className="actual">
          {this.state.base === this.state.currency ? "0.00" : this.state.value}
        </div>
        <div>
          1 {this.state.base}/{this.state.currency}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.change > 0) {
      var style = { color: "green" };
    } else if (
      (this.state.change < 0.01 && this.state.change > -0.01) ||
      isNaN(this.state.change)
    ) {
      style = {};
    } else {
      style = { color: "red" };
    }

    return (
      <div
        className={
          this.state.selected ? "rateContainer-selected" : "rateContainer"
        }
      >
        <img className="flag" src={this.state.flag} alt="" />
        <div className="rateCurrency">{this.state.currency}</div>
        {this.value()}
        <div className="rateChange" style={style}>
          {this.state.base === this.state.currency ? "0.00" : this.state.change}
          %
        </div>
      </div>
    );
  }
}
