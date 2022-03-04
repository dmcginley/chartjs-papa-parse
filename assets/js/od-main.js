drawChart();

async function drawChart() {
  const myData = await getData();
  const labels = myData.labels;
  const data = {
    labels: labels,

    datasets: [
      {
        label: "price 2",
        backgroundColor: "#e15759",
        borderColor: "#e15759",
        data: myData.price2,
        // fill: {
        //   target: "origin",
        //   above: "rgba(225, 86, 88, 0.2)", // Area will be red above the origin
        //   below: "#76b7b2", // And blue below the origin
        // },
      },

      {
        label: "price 1",
        backgroundColor: "#76b7b2",
        borderColor: "#76b7b2",
        data: myData.price1,
        pointRadius: 0,
        // fill: {
        //   // target: "origin",
        //   // above: "rgba(118, 183, 177, 0.5)", // Area will be red above the origin
        //   // below: "#76b7b2", // And blue below the origin
        // },
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      tension: 0.4,
      // borderWidth: 1,
      // pointPointRadius: 12,
    },
  };

  const oneValChart = new Chart(document.getElementById("od-main"), config);
}

async function getData() {
  const labels = [];
  const price1 = [];
  const price2 = [];
  // const price3 = [];

  // price2.sort();
  console.log(price2);
  const response = await fetch(
    "assets/csv-file/plot_extent_n_v2_test _median.csv"
  );
  const myData = await response.text();
  // console.log(myData);

  const formatData = myData.split("\n").slice(1);
  // console.log(formatData);
  // column[2].sort();

  formatData.forEach((row) => {
    const column = row.split(",");
    const month = column[0];
    const prices1 = column[2];
    const prices2 = column[3];

    labels.push(month);
    price1.push(prices1);
    price2.push(prices2);
    // price3.push(prices3);
    // console.log(column[0]);
  });

  const labelName = "a";
  //   console.log(price3);
  return { labels, price1, price2, labelName };
}
