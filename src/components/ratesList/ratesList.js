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

  getPrevDayData(date) {
    let prevDate = new Date(date);
    prevDate.setDate(prevDate.getDate() - 1);
    return fetch(
      "https://api.exchangeratesapi.io/" +
        prevDate.toISOString().split("T")[0] +
        "?base=CNY"
    ).then(res => res.json());
  }

  calculateChange(cur, prev) {
    console.log(cur, prev);
    return this.round(((cur - prev) / cur) * 100).toFixed(2);
  }

  getRateList() {
    fetch("https://api.exchangeratesapi.io/latest?base=CNY")
      .then(res => res.json())
      .then(async data => {
        let prevDayData = await this.getPrevDayData(data.date);
        this.targetRates.forEach(rate => {
          let change = this.calculateChange(
            data.rates[rate],
            prevDayData.rates[rate]
          );

          this.rates.push(
            <CurrencyRate
              currency={rate}
              value={this.round(data.rates[rate])}
              change={change}
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
