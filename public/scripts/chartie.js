// Create the chart
Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of courses online by University'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Number of courses online by University'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Europe',
            y: 56.33,
            drilldown: 'Europe'
        }, {
            name: 'Asia',
            y: 24.03,
            drilldown: 'Asia'
        }, {
            name: 'America',
            y: 10.38,
            drilldown: 'America'
        }, {
            name: 'Oceania',
            y: 4.77,
            drilldown: 'Oceania'
        }, {
            name: 'Africa',
            y: 0.91,
            drilldown: 'Africa'
        }]
    }],
    drilldown: {
        series: [{
            name: 'Europe',
            id: 'Europe',
            data: [
                [
                    'United Kingdom',
                    24
                ],
                [
                    'France',
                    17
                ],
                [
                    'Germany',
                    8
                ],
                [
                    'Spain',
                    55
                ],
                [
                    'Poland',
                    1
                ],
                [
                    'Belgium',
                    12
                ]
            ]
        }, {
            name: 'Asia',
            id: 'Asia',
            data: [
                [
                    'v40.0',
                    5
                ],
                [
                    'v41.0',
                    4.32
                ],
                [
                    'v42.0',
                    3.68
                ],
                [
                    'v39.0',
                    2.96
                ],
                [
                    'v36.0',
                    2.53
                ],
                [
                    'v43.0',
                    1.45
                ],
                [
                    'v31.0',
                    1.24
                ],
                [
                    'v35.0',
                    0.85
                ],
                [
                    'v38.0',
                    0.6
                ],
                [
                    'v32.0',
                    0.55
                ],
                [
                    'v37.0',
                    0.38
                ],
                [
                    'v33.0',
                    0.19
                ],
                [
                    'v34.0',
                    0.14
                ],
                [
                    'v30.0',
                    0.14
                ]
            ]
        }, {
            name: 'America',
            id: 'America',
            data: [
                [
                    'v35',
                    2.76
                ],
                [
                    'v36',
                    2.32
                ],
                [
                    'v37',
                    2.31
                ],
                [
                    'v34',
                    1.27
                ],
                [
                    'v38',
                    1.02
                ],
                [
                    'v31',
                    0.33
                ],
                [
                    'v33',
                    0.22
                ],
                [
                    'v32',
                    0.15
                ]
            ]
        }, {
            name: 'Oceania',
            id: 'Oceania',
            data: [
                [
                    'v8.0',
                    2.56
                ],
                [
                    'v7.1',
                    0.77
                ],
                [
                    'v5.1',
                    0.42
                ],
                [
                    'v5.0',
                    0.3
                ],
                [
                    'v6.1',
                    0.29
                ],
                [
                    'v7.0',
                    0.26
                ],
                [
                    'v6.2',
                    0.17
                ]
            ]
        }, {
            name: 'Africa',
            id: 'Africa',
            data: [
                [
                    'v12.x',
                    0.34
                ],
                [
                    'v28',
                    0.24
                ],
                [
                    'v27',
                    0.17
                ],
                [
                    'v29',
                    0.16
                ]
            ]
        }]
    }
});
