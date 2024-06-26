import Chart from "react-apexcharts";

export const Chart1 = () => {
  var optionsLine = {
    chart: {
      foreColor: "#9ba7b2",
      height: 360,
      type: "line",
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 0.1,
      },
    },
    stroke: {
      curve: "smooth",
      width: 5,
    },
    colors: ["#e72e2e", "#0c971a"],
    series: [
      {
        name: "Music",
        data: [1, 15, 56, 20, 33, 27, 15, 56, 20, 56],
      },
      {
        name: "Photos",
        data: [30, 33, 21, 42, 30, 33, 21, 42, 19, 32],
      },
    ],
    title: {
      text: "Multiline Chart",
      align: "left",
      offsetY: 25,
      offsetX: 20,
    },
    subtitle: {
      text: "Statistics",
      offsetY: 55,
      offsetX: 20,
    },
    markers: {
      size: 4,
      strokeWidth: 0,
      hover: {
        size: 7,
      },
    },
    grid: {
      show: true,
      padding: {
        bottom: 0,
      },
    },
    //labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
    xaxis: {
      //type: 'datetime',
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetY: -20,
    },
  };

  return (
    <Chart options={optionsLine} series={optionsLine.series} type="line" />
  );
};

export const Chart2 = () => {
  var options = {
    series: [
      {
        name: "series1",
        data: [31, 40, 68, 31, 92, 55, 100],
      },
      {
        name: "series2",
        data: [11, 82, 45, 80, 34, 52, 41],
      },
    ],
    chart: {
      foreColor: "#9ba7b2",
      height: 360,
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    colors: ["#3461ff", "#0c971a"],
    title: {
      text: "Area Chart",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return <Chart options={options} series={options.series} />;
};

import React from "react";

export const Chart3 = () => {
  var options = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      foreColor: "#9ba7b2",
      type: "bar",
      height: 360,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    title: {
      text: "Column Chart",
      align: "left",
      style: {
        fontSize: "14px",
      },
    },
    colors: ["#6184ff", "#3461ff", "#c4d1ff"],
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  return <Chart options={options} series={options.series} />;
};




export const Chart4 = () => {
  	var options = {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 610, 800, 980],
        },
      ],
      chart: {
        foreColor: "#9ba7b2",
        type: "bar",
        height: 350,
      },
      colors: ["#f83030"],
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "35%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
    };
  return (
    <Chart options={options} series={options.series} />
  )
}



export const Chart5 = () => {
  var options = {
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    chart: {
      foreColor: "#9ba7b2",
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    stroke: {
      width: [0, 4],
    },
    plotOptions: {
      bar: {
        //horizontal: true,
        columnWidth: "35%",
        endingShape: "rounded",
      },
    },
    colors: ["#0d6efd", "#212529"],
    title: {
      text: "Traffic Sources",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Website Blog",
        },
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
        },
      },
    ],
  };
  return (
  <Chart options={options} series={options.series}/>
  )
}



export const Chart6 = () => {
  var options = {
    series: [
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "TEAM B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "TEAM C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    chart: {
      foreColor: "#9ba7b2",
      height: 350,
      type: "line",
      stacked: false,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    colors: ["#0d6efd", "#17a00e", "#f41127"],
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };
  return (
    <Chart options={options} series={options.series}/>
  )
}




export const Chart7 = () => {
  	var options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        foreColor: "#9ba7b2",
        height: 380,
        type: "donut",
      },
      colors: ["#0d6efd", "#212529", "#17a00e", "#f41127", "#ffc107"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 320,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  return (
    <Chart options={options} series={options.series}/>
  )
}









