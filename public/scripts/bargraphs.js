// Create the chart
Highcharts.chart('bar-chart-1', {
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
            y: 153,
            drilldown: 'Europe'
        }, {
            name: 'Asia',
            y: 261,
            drilldown: 'Asia'
        }, {
            name: 'America',
            y: 340,
            drilldown: 'America'
        }, {
            name: 'Oceania',
            y: 87,
            drilldown: 'Oceania'
        }, {
            name: 'Africa',
            y: 95,
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
                    67
                ],
                [
                    'Germany',
                    38
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
                    'China',
                    50
                ],
                [
                    'Japan',
                    32
                ],
                [
                    'Thailand',
                    12
                ],
                [
                    'South Korea',
                    29
                ],
                [
                    'Arabia Saudi',
                    17
                ]
            ]
        }, {
            name: 'America',
            id: 'America',
            data: [
                [
                    'USA',
                    286
                ],
                [
                    'Argentina',
                    38
                ],
                [
                    'Brazil',
                    21
                ],
                [
                    'Chile',
                    13
                ],
                [
                    'Bolivia',
                    2
                ],
                [
                    'Ecuador',
                    3
                ],
                [
                    'Panama',
                    10
                ],
                [
                    'Colombia',
                    4
                ]
            ]
        }, {
            name: 'Oceania',
            id: 'Oceania',
            data: [
                [
                    'Australia',
                    27
                ],
                [
                    'New Zealand',
                    18
                ],
                [
                    'Indonesia',
                    7
                ],
                [
                    'Samoa',
                    3
                ]
            ]
        }, {
            name: 'Africa',
            id: 'Africa',
            data: [
                [
                    'South Africa',
                    8
                ],
                [
                    'Morocco',
                    12
                ],
                [
                    'Kenya',
                    5
                ],
                [
                    'Madagascar',
                    3
                ]
            ]
        }]
    }
});
