import React from "react";

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 671.26,
      baseCurrency: "USD",
      targetCurrency: "CNY"
    };
  }

  currentValue() {
    return <div>{this.state.currentValue}</div>;
  }

  currencySelector() {
    let base = <div>{this.state.baseCurrency}</div>;
    let target = <div>{this.state.targetCurrency}</div>;

    return (
      <div>
        {base}
        {target}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.currentValue()}
        {this.currencySelector()}
      </div>
    );
  }
}

export default Overview;
