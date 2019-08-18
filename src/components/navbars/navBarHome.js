import React, { Component } from "react";
import "./navBarHome.css";
import logo from "../../assets/infinite-symbol.svg";
import sort from "../../assets/baseline-swap_vert-24px.svg";

export default class NavBarHome extends Component {
  constructor(props) {
    super(props);

    this.switchOrder = props.orderCallback;
  }

  render() {
    return (
      <div className="navHome">
        <img className="logo" src={logo} alt="Valyu" />
        <img
          className="sort"
          src={sort}
          alt="Sort"
          onClick={this.switchOrder}
        />
      </div>
    );
  }
}
