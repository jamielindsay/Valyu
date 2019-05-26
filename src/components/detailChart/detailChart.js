import React, { Component } from "react";
import Chart from "chart.js";

import "./detailChart.css";

export default class DetailChart extends Component {
  constructor(props) {
    super(props);
    this.chartElementRef = React.createRef();

    this.state = {
      historicalData: props.historicalData
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState(
      {
        historicalData: newProps.historicalData
      },
      () => this.createChart()
    );
  }

  componentDidMount() {
    this.createChart();
  }

  createChart() {
    if (this.state.historicalData) {
      let dates = this.state.historicalData[0];
      let values = this.state.historicalData[1];

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
          labels: dates,
          datasets: [
            {
              data: values,
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
              tension: 0.5
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
                type: "time",
                time: {
                  unit: "month"
                },
                distribution: "linear",
                gridLines: {
                  drawBorder: false,
                  display: false
                },
                ticks: {
                  fontColor: "#a3a3a3",
                  fontStyle: "bold",
                  callback: function(tick, index, array) {
                    return index % 3 ? "" : tick;
                  },
                  maxRotation: 0,
                  minRotation: 0
                }
              }
            ]
          }
        }
      });
    }
  }

  lineChart() {
    return <canvas ref={this.chartElementRef} />;
  }

  render() {
    return <div className="chartContainer">{this.lineChart()}</div>;
  }
}
