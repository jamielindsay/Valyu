import React, { Component } from "react";
import Overview from "../components/overview/overview";
import NavBarDetail from "../components/navbars/navBarDetail";
import "./rateDetails.css";
import DetailChart from "../components/detailChart/detailChart";
import DetailAverages from "../components/detailAverages/detailAverages";
import LiveQuotes from "../components/liveQuotes/liveQuotes";

export default class RateDetails extends Component {
  constructor(props) {
    super(props);
    this.getTargetValue = this.getTargetValue.bind(this);
    this.targetValue = null;

    this.state = {
      exchangeRate: null,
      baseCurrency: "USD",
      targetCurrency: "CNY",
      historicalData: [],
      high: 0,
      low: 0,
      average: 0,
      chg: 0
    };

    this.fetchExchangeRate();
    this.fetchHistoricalData();
  }

  fetchExchangeRate() {
    let url = `https://api.exchangeratesapi.io/latest?base=${
      this.state.baseCurrency
    }&symbols=${this.state.targetCurrency}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ exchangeRate: data.rates[this.state.targetCurrency] });
      });
  }

  round(num) {
    return Math.round(num * 100) / 100;
  }

  fetchHistoricalData() {
    let historicalData = [];
    let url =
      "https://api.exchangeratesapi.io/history?start_at=2016-01-01&end_at=2019-01-01&base=USD&symbols=CNY";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        for (let dataPoint in data.rates) {
          historicalData.push([dataPoint, data.rates[dataPoint]["CNY"]]);
        }

        historicalData.sort(function(a, b) {
          if (a[0] > b[0]) {
            return 1;
          } else {
            return -1;
          }
        });

        let dates = [];
        let values = [];
        historicalData.forEach(e => {
          dates.push(e[0]);
          values.push(e[1]);
        });

        let sum = values.reduce((previous, current) => (current += previous));
        let diff = ((values[values.length - 1] - values[0]) / values[0]) * 100;
        this.setState({
          historicalData: [dates, values],
          low: this.round(Math.min(...values)),
          high: this.round(Math.max(...values)),
          average: this.round(sum / values.length),
          chg: this.round(diff)
        });
      });
  }

  getTargetValue(val) {
    this.targetValue = val;
  }

  render() {
    return (
      <div className="page">
        <NavBarDetail />
        <div className="mainContent">
          <Overview
            exchangeRate={this.state.exchangeRate}
            passTargetValue={this.getTargetValue}
          />
          <DetailChart historicalData={this.state.historicalData} />
          <DetailAverages
            high={this.state.high}
            low={this.state.low}
            average={this.state.average}
            chg={this.state.chg}
          />
          <LiveQuotes ecbRate={this.targetValue} />
        </div>
      </div>
    );
  }
}
