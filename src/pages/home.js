import React, { Component } from "react";
import NavBarHome from "../components/navbars/navBarHome";
import Searchbar from "../components/searchbar/searchbar";
import RatesList from "../components/ratesList/ratesList";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      order: "desc"
    };
  }

  switchOrder = () => {
    if (this.state.order === "desc") {
      this.setState({ order: "asc" });
    } else {
      this.setState({ order: "desc" });
    }
  };

  render() {
    return (
      <div className="page">
        <NavBarHome orderCallback={this.switchOrder} />
        <div className="mainContent">
          <Searchbar />
          <RatesList order={this.state.order} />
        </div>
      </div>
    );
  }
}
