import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RateDetails from "../pages/rateDetails";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={RateDetails} />
        <Route path="/RateDetails" component={RateDetails} />
      </BrowserRouter>
    );
  }
}
