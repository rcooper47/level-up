var ctx = document.getElementById('myChart');


var marksData = {
  labels: ["Overall", "Outside Shooting", "Inside Scoring", "Athleticism", "BallHandling", "Defense"],
  datasets: [
    {
      label: "Martha",
      backgroundColor: "#FFF17644",
      borderColor: "black",
      borderWidth: 1,
      data: [65, 75, 70, 80, 60, 80]
    },
    {
      label: "Steven",
      backgroundColor: "#8E24AA44",
      borderColor: "black",
      borderWidth: 1,
      data: [54, 65, 60, 70, 90, 75]
    }
  ]
};

var chartOptions = {
  plugins: {
    title: {
      display: true,
      align: "start",
      text: "Comparing Student Performance"
    },
    legend: {
      align: "start"
    }
  },
  scales: {
    r: {
      pointLabels: {
        font: {
          size: 20
        }
      }
    }
  }
};
var radarChart = new Chart(ctx, {
    type: 'radar',
    data: marksData,
    options: chartOptions
});
