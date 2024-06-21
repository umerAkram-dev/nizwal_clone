jQuery(document).ready(function($){
	 "use strict"

/*   var windowWidth = $(window).width();
   var containerWidth = $(window).width();
   $('.map-tabs').css({
    'marginLeft' : -windowWidth/2,
    'marginRight' : -windowWidth/2,
   })*/
	// Google Map
     function gmap_initilize(){
        // google-map Chicago
          if ($('.gmap-canvas').length > 0) {
            $('.gmap-canvas').each(function(){
              var mapID = $(this).attr('ID');
              var pos = {
                lat: $(this).data('lat'),
                lng: $(this).data('long')
              };


              var map = new google.maps.Map(document.getElementById(mapID), {
                zoom: $(this).data('zoom'),
                center: pos,
                scrollwheel: false
              });

              var image = $(this).data('marker');
              var beachMarker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: image
              });
              map.set('styles', [
                {
                  featureType: 'road',
                  stylers: [
                    {
                      saturation: -90
                },
                    {
                      gamma: 1.5
                }]
              }]);

            })
          }
     }
     /*gmap_initilize*/  
     gmap_initilize();
     $( 'ul.nav.nav-tabs  a' ).click( function ( e ) {
        e.preventDefault();
        gmap_initilize();
      });
})


jQuery(window).resize(function(){
   /*var windowWidth = jQuery(window).width();
   jQuery('.map-tabs').css({
    'marginLeft' : -windowWidth/2,
    'marginRight' : -windowWidth/2,
   })*/
})