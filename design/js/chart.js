const ctx = document.getElementById("myChart").getContext("2d");
const ctx1 = document.getElementById("myChart1").getContext("2d");
const ctx2 = document.getElementById("myChart2").getContext("2d");
const ctx3 = document.getElementById("myChart3").getContext("2d");

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const myChart1 = new Chart(ctx1, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

const myChart2 = new Chart(ctx2, {
  type: "polarArea",
  data: {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
      {
        label: "My First Dataset",
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  },
});

const myChart3 = new Chart(ctx3, {
  type: "scatter",
  data: {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        type: "bar",
        label: "Bar Dataset",
        data: [10, 20, 30, 40],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        type: "line",
        label: "Line Dataset",
        data: [50, 50, 50, 50],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// console.log(myChart2);
