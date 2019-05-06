import React, { Component } from "react";
import "./liveQuotes.css";

export default class LiveQuotes extends Component {
  constructor(props) {
    super(props);
    this.chartElementRef = React.createRef();

    this.state = {
      ecbRate: props.ecbRate
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      ecbRate: newProps.ecbRate
    });
  }

  ecb() {
    return (
      <div className="ecb">
        <div className="logoBox">
          <img
            className="exchangeLogo"
            src="icons/orgs/european_central_bank.svg"
            alt="ECB"
          />
        </div>
        <div className="exchangeName">European Central Bank</div>
        <div className="quote">{this.state.ecbRate}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="quotes">
        <div className="quotesLabel">Live Quotes</div>
        {this.ecb()}
      </div>
    );
  }
}
