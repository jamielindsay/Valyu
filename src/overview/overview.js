import React from "react";
import "./overview.css";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      targetValue: null,
      targetCallback: props.passTargetValue,
      exchangeRate: null,
      baseValue: 1,
      baseCurrency: "USD",
      baseFlag: "icons/flags/usa.svg",
      targetCurrency: "CNY",
      targetFlag: "icons/flags/china.svg"
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.state.exchangeRate !== newProps.exchangeRate) {
      this.setState(
        {
          exchangeRate: newProps.exchangeRate
        },
        () => this.updateTargetValue()
      );
    }
  }

  updateTargetValue() {
    this.setState(
      {
        targetValue:
          Math.round(this.state.exchangeRate * this.state.baseValue * 100) / 100
      },
      () => this.state.targetCallback(this.state.targetValue)
    );
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
