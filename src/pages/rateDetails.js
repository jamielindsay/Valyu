import React, { Component } from "react";
import Overview from "../overview/overview";
import NavBarDetail from "../navbars/navBarDetail";
import "./rateDetails.css";
import DetailChart from "../detailChart/detailChart";

export default class RateDetails extends Component {
  render() {
    return (
      <div className="page">
        <NavBarDetail />
        <div className="mainContent">
          <Overview />
          <DetailChart />
        </div>
      </div>
    );
  }
}
