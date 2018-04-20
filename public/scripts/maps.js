
$.getJSON('https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/world-population-density.json', function (data) {

    // Prevent logarithmic errors in color calulcation
    $.each(data, function () {
        this.value = (this.value < 1 ? 1 : this.value);
    });

    // Initiate the chart
    Highcharts.mapChart('maps-universities-1', {

        chart: {
            map: 'custom/world'
        },

        title: {
            text: 'Universities per Country'
        },

        legend: {
            title: {
                text: 'Universities per country',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        tooltip: {
            backgroundColor: 'none',
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            padding: 0,
            pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
                '</span></span> {point.name}<br>' +
                '<span style="font-size:30px">{point.value} universities</span>',
            positioner: function () {
                return { x: 0, y: 250 };
            }
        },

        colorAxis: {
            min: 1,
            max: 1000,
            type: 'logarithmic'
        },

        series: [{
            data: data,
            joinBy: ['iso-a3', 'code3'],
            name: 'How many universities in our ranking?',
            states: {
                hover: {
                    color: '#a4edba'
                }
            }
        }]
    });
});