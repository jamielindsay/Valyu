import React, { Component } from "react";
import CurrencyRate from "../currencyRate/currencyRate";

export default class RatesList extends Component {
  constructor(props) {
    super(props);
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

    this.state = {
      rendered: false,
      order: props.order,
      base: "CNY"
    };

    this.getRateList();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ order: newProps.order });
  }

  getPrevDayData(date) {
    let prevDate = new Date(date);
    prevDate.setDate(prevDate.getDate() - 1);
    return fetch(
      "https://api.exchangeratesapi.io/" +
        prevDate.toISOString().split("T")[0] +
        `?base=${this.state.base}`
    ).then(res => res.json());
  }

  calculateChange(cur, prev) {
    return this.round(((cur - prev) / cur) * 100).toFixed(2);
  }

  getRateList() {
    this.rates = [];
    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
      .then(res => res.json())
      .then(async data => {
        let prevDayData = await this.getPrevDayData(data.date);
        this.targetRates.forEach(rate => {
          let change = this.calculateChange(
            data.rates[rate],
            prevDayData.rates[rate]
          );

          this.rates.push({
            currency: rate,
            value: this.round(data.rates[rate]),
            change: change
          });
        });

        this.generateRatesLists();
      });
  }

  round(num) {
    return Math.round(num * 100) / 100;
  }

  sortRates(order) {
    this.rates.sort((a, b) =>
      order === "asc" ? a.change - b.change : b.change - a.change
    );
  }

  buildRatesList(order) {
    this.sortRates(order);
    let rates = [];
    this.rates.forEach((rate, i) => {
      let selected = rate.currency === this.state.base;
      let elem = (
        <div
          onClick={() => {
            this.setState({ base: rate.currency }, this.getRateList);
          }}
        >
          <CurrencyRate
            key={this.state.base + order + i}
            currency={rate.currency}
            base={this.state.base}
            value={rate.value}
            change={rate.change}
            selected={selected}
          />
        </div>
      );

      if (selected) {
        rates.unshift(elem);
      } else {
        rates.push(elem);
      }
    });
    return rates;
  }

  generateRatesLists() {
    this.setState({
      rendered: true,
      ratesLists: {
        asc: this.buildRatesList("asc"),
        desc: this.buildRatesList("desc")
      }
    });
  }

  render() {
    if (this.state.rendered) {
      return (
        <div className="ratesList">
          {this.state.ratesLists[this.state.order]}
        </div>
      );
    } else {
      return <span>Loading...</span>;
    }
  }
}
