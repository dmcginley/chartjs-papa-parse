drawChart();

async function drawChart() {
  const myData = await getData();
  const labels = myData.labels;
  const data = {
    labels: labels,

    datasets: [
      {
        label: "price 3",
        // backgroundColor: "rgb(223, 163, 0)",
        borderColor: "#d66506",
        data: myData.price3,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
        // pointHoverRadius: 2,
        borderDash: [8, 6],

        fill: {
          // target: "origin",
          // above: "rgba(223, 163, 0, 0.3)", // Area will be red above the origin
          // below: "#76b7b2", // And blue below the origin
        },
      },
      {
        label: "price 2",
        backgroundColor: "#b931c2",
        borderColor: "#b931c2",
        data: myData.price2,
        fill: {
          target: "origin",
          above: "rgba(185, 49, 194,.2)", // Area will be red above the origin
          below: "#76b7b2", // And blue below the origin
        },
      },

      {
        label: "price 1",
        backgroundColor: "#76b7b2",
        borderColor: "#76b7b2",
        data: myData.price1,
        fill: {
          target: "origin",
          above: "rgba(118, 183, 177, 0.2)", // Area will be red above the origin
          below: "#76b7b2", // And blue below the origin
        },
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      //   tension: 0.4,
      borderWidth: 1,
      // pointRadius: 0,
      // pointPointRadius: 12,
    },
  };

  const testChart = new Chart(document.getElementById("testChart"), config);
}

async function getData() {
  const labels = [];
  const price1 = [];
  const price2 = [];
  const price3 = [];

  const response = await fetch("assets/csv-file/plot_extent_n_v2_test.csv");
  const myData = await response.text();
  console.log(myData);

  const formatData = myData.split("\n").slice(1);
  // console.log(formatData);

  formatData.forEach((row) => {
    const column = row.split(",");
    const month = column[0];
    const prices1 = column[2];
    const prices2 = column[3];
    const prices3 = column[4];
    labels.push(month);
    price1.push(prices1);
    price2.push(prices2);
    price3.push(prices3);
    console.log(column[0]);
  });

  const labelName = "a";
  //   console.log(price3);
  return { labels, price1, price2, price3, labelName };
}
