export const netGainData = {labels: ["Energy", "Materials", "Consumer", "Health Care", "Finance", "Technology"],
  datasets: [{
      data: [80, 10, 40, 30, 0, 90]
  }]};

  export  const netGainOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 20,
        display: false,
      },
      pointLabels: {
        fontSize: 14,
        fontColor: "#6c757c",
        color: "#f3f3f3",
        zeroLineColor: "#f3f3f3"
      },
      angleLines: {
        color: "#f3f3f3",
        zeroLineColor: "#f3f3f3",
      },
      gridLines: {
        color: "#f3f3f3",
        zeroLineColor: "#f3f3f3",
      }
    },
    legend: false,
  }
