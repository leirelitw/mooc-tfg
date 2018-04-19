$('#pie-graph-universities-1').highcharts({
    plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
    },
    chart: {
      renderTo: 'container',
      type: 'pie'
    },
    xAxis: {
      categories: ["Peter", "Leire", "Ilya",
                     "Danielle", "Justin", "Alex"]
    },
    title: {
      text: 'Employees team working hours'
    },
    series: [{
      name: 'Working hours/week',
      colorByPoint: true,
      data: [{
        name: 'Peter',
        y: 40,
      }, {
        name: 'Leire',
        y: 42
      }, {
        name: 'Ilya',
        y: 37
      }, {
        name: 'Danielle',
        y: 50
      }, {
        name: 'Justin',
        y: 21
      }, {
        name: 'Alex',
        y: 13
      }]
    }]
});
