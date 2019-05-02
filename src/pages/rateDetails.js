import React, { Component } from "react";
import Overview from "../overview/overview";
import NavBarDetail from "../navbars/navBarDetail";
import "./rateDetails.css";
import DetailChart from "../detailChart/detailChart";
import DetailAverages from "../detailAverages/detailAverages";
import LiveQuotes from "../liveQuotes/liveQuotes";

export default class RateDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historicalData: [],
      high: 0,
      low: 0,
      average: 0
    };
  }

  componentDidMount() {
    this.fetchHistoricalData();
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
        this.setState({
          historicalData: [dates, values],
          low: Math.min(...values),
          high: Math.max(...values),
          average: sum / values.length
        });
      });
  }

  render() {
    return (
      <div className="page">
        <NavBarDetail />
        <div className="mainContent">
          <Overview />
          <DetailChart historicalData={this.state.historicalData} />
          <DetailAverages />
          <LiveQuotes />
        </div>
      </div>
    );
  }
}
