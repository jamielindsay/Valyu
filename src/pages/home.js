import React, { Component } from "react";
import NavBarHome from "../components/navbars/navBarHome";
import Searchbar from "../components/searchbar/searchbar";

export default class Home extends Component {
  render() {
    return (
      <div className="page">
        <NavBarHome />
        <div className="mainContent">
          <Searchbar />
          <div />
        </div>
      </div>
    );
  }
}
