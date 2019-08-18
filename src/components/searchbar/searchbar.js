import React, { Component } from "react";
import "./searchbar.css";

export default class Searchbar extends Component {
  render() {
    return <input className="searchbar" type="text" placeholder="Search" />;
  }
}
