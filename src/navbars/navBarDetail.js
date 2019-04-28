import React, { Component } from "react";
import "./navBarDetail.css";

export default class NavBarDetail extends Component {
  backButton() {
    return <img className="navIcon" src="icons/back-nav.svg" alt="back" />;
  }

  render() {
    return (
      <div className="navBar">
        {this.backButton()}
        <div className="navTitle">Rate Details</div>
      </div>
    );
  }
}
