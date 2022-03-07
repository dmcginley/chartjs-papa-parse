// const csvData = document.getElementById("csvData").value;

// console.log(
//   Papa.parse(csvData, {
//     header: true,
//     skipEmptyLines: true,
//   })
// );

// let btnUpload = document
//   .getElementById("btn-read-csv")
//   .addEventListener("click", () => {
//     Papa.parse(document.getElementById("txtFileUpload").files[0], {
//       header: true,
//       skipEmptyLines: true,
//       complete: function (results) {
//         console.log(results);
//         results.data.map((data, index) => {
//           console.log(data);
//         });
//       },
//     });
//   });
const date = [];

const firstData = [];
const secondData = [];
const thirdData = [];

const confirmReadCsv = document
  .getElementById("confirm-read-csv")
  .addEventListener("click", () => {
    Papa.parse(document.getElementById("txtFileUpload").files[0], {
      download: true,
      skipEmptyLines: true,
      header: true,
      complete: function (results) {
        console.log(results);
        for (i = 0; i < results.data.length; i++) {
          date.push(results.data[i].Month);
          firstData.push(results.data[i].price1);
          secondData.push(results.data[i].price2);
          thirdData.push(results.data[i].price3);
        }
        console.log(secondData);
      },
    });
  });

// chart.js chart ------------------

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Other"],
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "price1",
        data: firstData,
        backgroundColor: "rgba(54, 162, 235, .4)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Profit",
        data: secondData,
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Sell",
        data: thirdData,
        backgroundColor: "rgba(255, 99, 132, 0.4)",
        borderColor: "rgba(255, 99, 132, 1)",
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

// drawChart();

// async function drawChart() {
//   const csvData = await getData();
//   const labels = myData.labels;
//   const data = {
//     labels: labels,

//     datasets: [
//       {
//         label: "Cost",
//         backgroundColor: "#5299d9",
//         data: cost,
//       },
//       {
//         label: "profit",
//         backgroundColor: "#5299d9",
//         data: profit,
//       },
//       {
//         label: "sell",
//         backgroundColor: "#5299d9",
//         data: sell,
//       },
//     ],
//   };

//   const config = {
//     type: "bar",
//     data: data,
//     options: {
//       // borderWidth: 2,
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   };

//   const testChart = new Chart(document.getElementById("testChart"), config);
// }

// async function getData() {
//   const labels = [];
//   const price1 = [];
//   const price2 = [];
//   const price3 = [];
//   const response = await fetch("assets/csv-file/plot_extent_n_v2_test.csv");
//   const myData = await response.text();
//   // console.log(myData);
//   const formatData = myData.split("\n").slice(0);
//   // console.log(formatData);
//   formatData.forEach((row) => {
//     const column = row.split(",");
//     const month = column[0];
//     const prices1 = column[2];
//     const prices2 = column[3];
//     const prices3 = column[4];
//     labels.push(month);
//     price1.push(prices1);
//     price2.push(prices2);
//     price3.push(prices3);
//     // console.log(column[0]);
//   });
//   const labelName = "a";
//   //   console.log(price3);
//   return { labels, price1, price2, price3, labelName };
// }
