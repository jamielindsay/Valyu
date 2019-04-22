import React, { Component } from "react";
import Chart from "chart.js";

import "./detailChart.css";

export default class DetailChart extends Component {
  constructor(props) {
    super(props);

    this.chartElementRef = React.createRef();
  }

  componentDidMount() {
    this.ctx = this.chartElementRef.current.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 0, 200, 0);
    gradientStroke.addColorStop(0, "#5943C3");
    gradientStroke.addColorStop(1, "#FCC692");

    var gradientFill = this.ctx.createLinearGradient(0, 0, 200, 0);
    gradientFill.addColorStop(0, "rgba(89, 67, 195, 0.05)");
    gradientFill.addColorStop(1, "rgba(252, 198, 146, 0.05)");

    new Chart(this.ctx, {
      type: "line",
      data: {
        labels: ["7D", "1M", "6M", "1Y", "3Y", "5Y"],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 3
          }
        ]
      },
      options: {
        elements: {
          line: {
            tension: 0
          }
        },
        animation: {
          easing: "easeInOutBack"
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              display: false
            }
          ],
          xAxes: [
            {
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                fontColor: "#a3a3a3",
                fontStyle: "bold"
              }
            }
          ]
        }
      }
    });
  }

  lineChart() {
    return <canvas ref={this.chartElementRef} />;
  }

  render() {
    return <div className="chartContainer">{this.lineChart()}</div>;
  }
}
