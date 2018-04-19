$('#linear-graph-universities-1').highcharts({
    xAxis: {
        categories: ["January", "February", "March",
                     "April", "May", "June", "July", "August",
                   "September","October","November", "December"]
    },
    yAxis: [{
      title: {
        text: 'Dollars ($)'
      }
    }],
    title: {
      text: 'Chart for paycheck $/month'
    },
    series: [{
      name: 'Dollars ($) a month',
      data: [2000, 2100, 2300, 2000, 1800, 1950, 1900, 2000, 2100, 2400, 2300, 2350]
    }]
});
