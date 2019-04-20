import React, { Component } from "react";
import "./navBarDetail.css";

export default class NavBarDetail extends Component {
  backButton() {
    return <div className="navIcon">BACK</div>;
  }

  statsButton() {
    return <div className="navIcon">STATS</div>;
  }

  render() {
    return (
      <div className="navBar">
        {this.backButton()}
        <div>Rate Details</div>
        {this.statsButton()}
      </div>
    );
  }
}
