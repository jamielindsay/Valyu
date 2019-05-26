import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RateDetails from "../pages/rateDetails";
import Home from "../pages/home";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/RateDetails" component={RateDetails} />
      </BrowserRouter>
    );
  }
}
