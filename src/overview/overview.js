import React from "react";
import "./overview.css";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      targetValue: null,
      exchangeRate: null,
      baseValue: 1,
      baseCurrency: "USD",
      baseFlag: "icons/flags/usa.svg",
      targetCurrency: "CNY",
      targetFlag: "icons/flags/china.svg"
    };

    this.updateExchangeRate();
  }

  updateTargetValue() {
    this.setState({
      targetValue:
        Math.round(this.state.exchangeRate * this.state.baseValue * 100) / 100
    });
  }

  updateExchangeRate() {
    let url = `https://api.exchangeratesapi.io/latest?base=${
      this.state.baseCurrency
    }&symbols=${this.state.targetCurrency}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(
          { exchangeRate: data.rates[this.state.targetCurrency] },
          () => this.updateTargetValue()
        );
      });
  }

  updateBaseValue(value) {
    this.setState(
      {
        baseValue: value
      },
      () => this.updateTargetValue()
    );
  }

  targetValue() {
    return <div className="targetValue">{this.state.targetValue}</div>;
  }

  currencySelector() {
    let base = (
      <div className="currency">
        <img className="currencyFlag" src={this.state.baseFlag} alt="USA" />
        <input
          type="number"
          min="1"
          defaultValue={this.state.baseValue}
          onInput={e => this.updateBaseValue(e.target.value)}
        />
        {" " + this.state.baseCurrency}
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
