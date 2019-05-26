import React, { Component } from "react";
import "./navBarDetail.css";
import { Redirect } from "react-router-dom";

export default class NavBarDetail extends Component {
  constructor() {
    super();
    this.state = {
      navigate: false
    };
  }

  backButton() {
    return (
      <img
        className="navIcon"
        src="icons/back-nav.svg"
        alt="back"
        onClick={e => {
          e.preventDefault();
          this.setState({ navigate: true });
        }}
      />
    );
  }

  render() {
    if (this.state.navigate) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="navBar">
          {this.backButton()}
          <div className="navTitle">Rate Details</div>
        </div>
      );
    }
  }
}
