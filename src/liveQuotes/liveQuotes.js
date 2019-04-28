import React, { Component } from "react";
import "./liveQuotes.css";

export default class LiveQuotes extends Component {
  yahoo() {
    return (
      <div className="yahoo">
        <div className="exchangeLogo">YH</div>
        <div className="exchangeName">YAHOO</div>
        <div className="quote">671.19</div>
      </div>
    );
  }

  render() {
    return (
      <div className="quotes">
        <div className="quotesLabel">Live Quotes</div>
        {this.yahoo()}
      </div>
    );
  }
}
