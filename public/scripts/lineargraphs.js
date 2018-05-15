$('#linear-graph-universities-1').highcharts({
    xAxis: {
        categories: ["America", "Europe", "Asia",
                     "Oceania", "Africa"]
    },
    yAxis: [{
      title: {
        text: 'Universities'
      }
    }],
    title: {
      text: 'Chart for universities in each continent'
    },
    series: [{
      name: 'Universities / Continent',
      data: [218, 132, 146, 80, 43]
    }]
});
