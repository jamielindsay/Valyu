import React, { Component } from "react";
import CurrencyRate from "../currencyRate/currencyRate";

export default class RatesList extends Component {
  constructor() {
    super();
    this.targetRates = [
      "CNY",
      "USD",
      "EUR",
      "AUD",
      "JPY",
      "BRL",
      "CAD",
      "INR",
      "SGD"
    ];
    this.rates = [];

    this.state = {
      rendered: false
    };

    this.getRateList();
  }

  getRateList() {
    fetch("https://api.exchangeratesapi.io/latest?base=CNY")
      .then(res => res.json())
      .then(data => {
        this.targetRates.forEach(rate => {
          this.rates.push(
            <CurrencyRate
              currency={rate}
              value={this.round(data.rates[rate])}
            />
          );
        });
        this.setState({ rendered: true });
      });
  }

  round(num) {
    return Math.round(num * 100) / 100;
  }

  render() {
    if (this.state.rendered) {
      return <div className="ratesList">{this.rates}</div>;
    } else {
      return <span>Loading...</span>;
    }
  }
}
