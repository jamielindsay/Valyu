import React, { Component } from "react";
import "./detailAverage.css";

export default class DetailAverages extends Component {
  constructor(props) {
    super(props);
    this.chartElementRef = React.createRef();

    this.state = {
      high: props.high,
      low: props.low,
      average: props.average,
      chg: props.chg
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      high: newProps.high,
      low: newProps.low,
      average: newProps.average,
      chg: newProps.chg
    });
  }

  high() {
    return (
      <div>
        <div className="number">{this.state.high}</div>
        <div className="label">H</div>
      </div>
    );
  }

  low() {
    return (
      <div>
        <div className="number">{this.state.low}</div>
        <div className="label">L</div>
      </div>
    );
  }

  average() {
    return (
      <div>
        <div className="number">{this.state.average}</div>
        <div className="label">A</div>
      </div>
    );
  }

  change() {
    return (
      <div>
        <div className="number">{this.state.chg}%</div>
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
