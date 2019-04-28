import React, { Component } from "react";
import Overview from "../overview/overview";
import NavBarDetail from "../navbars/navBarDetail";
import "./rateDetails.css";
import DetailChart from "../detailChart/detailChart";
import DetailAverages from "../detailAverages/detailAverages";
import LiveQuotes from "../liveQuotes/liveQuotes";

export default class RateDetails extends Component {
  render() {
    return (
      <div className="page">
        <NavBarDetail />
        <div className="mainContent">
          <Overview />
          <DetailChart />
          <DetailAverages />
          <LiveQuotes />
        </div>
      </div>
    );
  }
}
