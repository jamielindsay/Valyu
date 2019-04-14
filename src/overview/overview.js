import React from "react";
import "./overview.css";

class Overview extends React.Component {
  constructor(props) {
    super(props);

    let flagsPath = "icons/flags/";

    this.state = {
      currentValue: 671.26,
      baseCurrency: "USD",
      baseFlag: flagsPath + "usa.svg",
      targetCurrency: "CNY",
      targetFlag: flagsPath + "china.svg"
    };
  }

  currentValue() {
    return <div class="currentValue">{this.state.currentValue}</div>;
  }

  currencySelector() {
    let base = (
      <div>
        <img class="currencyFlag" src={this.state.baseFlag} alt="USA" />
        {this.state.baseCurrency}
      </div>
    );
    let target = (
      <div>
        <img class="currencyFlag" src={this.state.targetFlag} alt="China" />
        {this.state.targetCurrency}
      </div>
    );

    return (
      <div class="currencySelector">
        {base}
        <img
          src="https://img.icons8.com/material/24/000000/right.png"
          alt="Right arrow"
        />
        {target}
      </div>
    );
  }

  render() {
    return (
      <div class="overview">
        {this.currentValue()}
        {this.currencySelector()}
      </div>
    );
  }
}

export default Overview;
