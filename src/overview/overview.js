import React from "react";
import "./overview.css";

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      targetValue: null,
      baseValue: 100,
      baseCurrency: "USD",
      baseFlag: "icons/flags/usa.svg",
      targetCurrency: "CNY",
      targetFlag: "icons/flags/china.svg"
    };

    this.findExchangeRate();
  }

  findExchangeRate() {
    let url = `https://api.exchangeratesapi.io/latest?base=${
      this.state.baseCurrency
    }&symbols=${this.state.targetCurrency}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let value =
          data.rates[this.state.targetCurrency] * this.state.baseValue;
        this.setState({ targetValue: Math.round(value * 100) / 100 });
      });
  }

  targetValue() {
    return <div className="targetValue">{this.state.targetValue}</div>;
  }

  currencySelector() {
    let base = (
      <div className="currency">
        <img className="currencyFlag" src={this.state.baseFlag} alt="USA" />
        {this.state.baseValue + " " + this.state.baseCurrency}
      </div>
    );
    let target = (
      <div className="currency">
        {this.state.targetCurrency}
        <img className="currencyFlag" src={this.state.targetFlag} alt="China" />
      </div>
    );

    return (
      <div className="currencySelector">
        <div className="selectorItem">{base}</div>
        <div className="selectorItem">
          <img
            id="selectorArrow"
            src="icons/arrow-right.svg"
            alt="Right arrow"
          />
        </div>
        <div className="selectorItem">{target}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="overview">
        {this.targetValue()}
        {this.currencySelector()}
      </div>
    );
  }
}

export default Overview;
