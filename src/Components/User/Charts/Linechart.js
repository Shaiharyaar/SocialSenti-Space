import React from "react";
import ReactApexChart from "react-apexcharts";
class TwitterLineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "2020",
          data: [128, 229, 33, 436, 99, 132, 233],
        },
      ],
      options: {
        chart: {
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#555",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: true,
          },
        },
        colors: ["#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Tweets per Day",
          align: "left",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 1,
          },
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: [
            "Day 1",
            "Day 2",
            "Day 3",
            "Day 4",
            "Day 5",
            "Day 6",
            "Day 7",
          ],
          title: {
            text: "Week",
          },
        },
        yaxis: {
          title: {
            text: "Tweets",
          },
          min: 5,
          max: 500,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  }
  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        height="390px"
      />
    );
  }
}

export default TwitterLineChart;