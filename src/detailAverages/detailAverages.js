import React, { Component } from "react";
import "./detailAverage.css";

export default class DetailAverages extends Component {
  high() {
    return (
      <div>
        <div className="number">677.21</div>
        <div className="label">H</div>
      </div>
    );
  }

  low() {
    return (
      <div>
        <div className="number">668.62</div>
        <div className="label">L</div>
      </div>
    );
  }

  average() {
    return (
      <div>
        <div className="number">671.65</div>
        <div className="label">A</div>
      </div>
    );
  }

  change() {
    return (
      <div>
        <div className="number">-0.87%</div>
        <div className="label">Chg</div>
      </div>
    );
  }

  render() {
    return (
      <div className="averages">
        {this.high()}
        {this.low()}
        {this.average()}
        {this.change()}
      </div>
    );
  }
}
