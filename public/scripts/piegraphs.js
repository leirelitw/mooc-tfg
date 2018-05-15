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
      categories: ["Spain", "France", "Italy",
                     "Belgium", "Germany", "UK"]
    },
    title: {
      text: 'Universities per country'
    },
    series: [{
      name: 'Universities/country',
      colorByPoint: true,
      data: [{
        name: 'Spain',
        y: 40,
      }, {
        name: 'France',
        y: 42
      }, {
        name: 'Italy',
        y: 37
      }, {
        name: 'Belgium',
        y: 50
      }, {
        name: 'Germany',
        y: 21
      }, {
        name: 'UK',
        y: 13
      }]
    }]
});
