// Range slider - gravity forms
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1,
      max: 100,
      step: 1,
      values: [ 1, 100 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "#" + ui.values[ 0 ] + " - #" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "#" + $( "#slider-range" ).slider( "values", 0 ) +
      " - #" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
