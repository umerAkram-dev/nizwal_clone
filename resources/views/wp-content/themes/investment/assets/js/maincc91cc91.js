/*
 Project Name :   Investment Expert
 Author Company : Themeperch
 Author Website : http://themeperch.net/

1. Sticky Header 
2. Isotope
3. Google Map
4. ResponsiveTabs
5. Sectionize-Control 
6. MagnificPopup
7. Tablesorter
8. Sidebar Menu
9. Tab Using Plus Minus  Icon 

 */

jQuery( document ).ready(function($) {
  "use strict"

  if(! $('#header').find('div:first').hasClass('topbar')){
    $('body').addClass('no-topbar');
  }
  else{
    $('body').removeClass('no-topbar');
  }

  //offcanvas search field autofocus
	$(document).on('click', '#off-search', function(){
		setTimeout(function() { $('.offcanvas-search .form-control').focus() }, 500)
	});



  // filter buttons
  $(document).on('click', '#category-filter a', function(){    
      $('#category-filter a').removeClass('active');
      $(this).addClass('active');
    
      var selector = $(this).data('filter');
      $('.portfolio-isotope').isotope({ filter: '.'+selector });
      return false;
  });

  function investmentIsotopeInfBlockHeight(){
      var itemHeight = $('.portfolio-isotope .item .item-inner:first').height();
      $('.info-block .info-block-inner').css({
        'min-height': itemHeight
      });
  }
      
  // Isotope
  function investmentIsotope() {
    investmentIsotopeInfBlockHeight();
    
    $('.portfolio-isotope').isotope({
        layoutMode: 'fitRows',
        fitRows: {
          gutter: '.gutter-sizer',
           gutter: 0
        },
        percentPosition: true,
        itemSelector : '.col',
        isOriginLeft: ($('body').hasClass('rtl')? false : true),
        filter: '.'+$('#category-filter .active').data('filter'),
        masonry: {
          gutter: 2
        }
    });
  

    $('.service-isotope').isotope({
        itemSelector : '.item',
        layoutMode: 'masonry',
        isOriginLeft: ($('body').hasClass('rtl')? false : true),
        masonry: {
          gutter: 2
        }
    });
    
    $('#category-filter .active').trigger('click');
  } // investmentIsotope


 setTimeout(investmentIsotope, 1000);

   

  $('.dropdown-toggle').dropdown();
  $('table').addClass('table');
  $('footer .widget_nav_menu').addClass('useful-links');

  $(document).on('click', '.count-control', function(){
      var old = parseInt($(this).closest('.quantity').find('.qty').val());
      if($(this).hasClass('plus')){

        if(parseInt($(this).data('max')) != -1 ){
          if( (parseInt($(this).data('max'))-1) >= old ){
           $(this).closest('.quantity').find('.qty').val(old+1);
          }
        }else{
          $(this).closest('.quantity').find('.qty').val(old+1);
        }      
        
      }else{
        if(old > 1){
          $(this).closest('.quantity').find('.qty').val(old-1);
        }     
      }
      $(this).closest('form').find('button[type="submit"]').prop('disabled', false);
      return false;
  })

  $('.clients-carousel').owlCarousel({
      loop:false,
      rtl: ($('body').hasClass('rtl')? true : false),
      items:3,
      animateOut: 'zoomOut',
      animateIn: 'fadeIn',
      dots: false,
      autoplay: true,
      autoplayHoverPause: true
  })

  if($('.team-carousel').length > 0){
      $('.team-carousel').each(function(){
          var column = parseInt($(this).data('column'));
          var margin = parseInt($(this).data('margin'));
          $(this).owlCarousel({
              loop:false,
              rtl: ($('body').hasClass('rtl')? true : false),
              items: column,
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              dots: false,
              autoplay: true,
              autoplayHoverPause: true,
              margin: margin,
              responsive: {
                1000 : {
                  items:column,
                  dots: false,
                },
                600 : {
                  items:2,
                  dots: true,
                },
                300 : {
                  items:1,
                  dots: true,
                }
              }
          })
      });
  }

  if($('.blog-carousel').length > 0){
      
      $('.blog-carousel').each(function(){
          var column = parseInt($(this).data('column'));
          $(this).owlCarousel({
              loop:false,
              rtl: ($('body').hasClass('rtl')? true : false),
              items: column,
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              dots: false,
              autoplay: false,
              autoplayHoverPause: true,
              margin: 30,
              responsive: {
                1000 : {
                  items:column,
                  dots: false,
                },
                600 : {
                  items:2,
                  dots: true,
                },
                300 : {
                  items:1,
                  dots: true,
                }
              }
          })
      });
  }

  if($('.service-carousel').length > 0){
      
      $('.service-carousel').each(function(){
          var column = parseInt($(this).data('column'));
          $(this).owlCarousel({
              loop:false,
              rtl: ($('body').hasClass('rtl')? true : false),
              items: column,
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              dots: true,
              autoplay: true,
              autoplayHoverPause: true,
              margin: 30,
              responsive: {
                1000 : {
                  items:column,
                },
                600 : {
                  items:2,
                },
                300 : {
                  items:1,
                }
              }
          })
      });
  }

  if($('.product-categories-carousel').length > 0){
      
      $('.product-categories-carousel').each(function(){
          var column = parseInt($(this).data('column'));
          $(this).owlCarousel({
              loop:true,
              rtl: ($('body').hasClass('rtl')? true : false),
              items: column,
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              dots: false,
              autoplay: true,
              autoplayHoverPause: true,
              margin: 30,
              responsive: {
                1000 : {
                  items:column,
                  dots: false,
                },
                600 : {
                  items:2,
                  dots: true,
                },
                300 : {
                  items:1,
                  dots: true,
                }
              }
          })
      });
  }

  if($('.vc_carousel-slideline-inner').length > 0){
      
    $('.vc_carousel-slideline-inner').each(function(){
          var carouseWrap = $(this).closest('.vc_images_carousel');
          var column = parseInt(carouseWrap.data('per-view'));
          var dots = carouseWrap.data('dots');
          var autoplay = carouseWrap.data('interval');
          var center = carouseWrap.data('partial');
          var navs = carouseWrap.data('navs');
          var loop = carouseWrap.data('wrap');
          
         
          $(this).owlCarousel({
              loop:loop,
              rtl: ($('body').hasClass('rtl')? true : false),
              items: column,
              //dotsContainer: '.vc_carousel-indicators',
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              autoplay: autoplay,
              nav: navs,
              navText: ['<i class="icon icon-left"></i>','<i class="icon icon-right"></i>'],
              autoplayHoverPause: true,
              center: center,
              margin: 30,
              responsive: {
                1000 : {
                  items:column,
                },
                600 : {
                  items:2,
                },
                300 : {
                  items:1,
                }
              }
          })
      });
  }

  $('.portfolio-testimonial-carousel').owlCarousel({
      loop:true,
      items:1,
      animateOut: 'zoomOut',
      rtl: ($('body').hasClass('rtl')? true : false),
      animateIn: 'fadeIn',
      dots: true,
      autoplay: true,
      autoplayHoverPause: true
  });
       

   

    // MagnificPopup
    $('.post, .testimonials').magnificPopup({
      delegate: '.full-size',
      type: 'image',
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {          
          return (item.el.attr('title') != false)? item.el.attr('title') : '';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        easing: 'ease-in-out',
        duration: 300,
        opener: function(element) {
          return element.closest('div').find('img');
        }
      }
    });

    $('.modal-popup').on('click', function(){
        $('.modal-popup').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#userEmail',
        modal: true
      });
      $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });

      return false;
    })
    

    // MagnificPopup
    $('.investment-image-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return (item.el.attr('title') != false)? item.el.attr('title') : '';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        easing: 'ease-in-out',
        duration: 300,
        opener: function(element) {
          return element.closest('div').find('img');
        }
      }
    });

    /*Tablesorter*/
    if($(".tablesorter").length > 0){
      $(".tablesorter").tablesorter({
        sortList : [[1,0],[2,0],[3,0]],
        headerTemplate : '{icon}{content}',
        widgets : ["columns"],
        widgetOptions : {
          columns : [ "primary", "secondary", "tertiary" ]
        }
      });
    }
      


      $('.wpcf7-validates-as-required').closest('span').addClass('required-field');
   
     
    
     $(".fitvideo").fitVids();

     $('#sidebar ul.tml-action-links').removeClass('tml-action-links');


    
     
    
     $(window).on('load', function(){
        if( $('html').attr('dir') == 'rtl' ){
            $('[data-vc-full-width="true"]').each( function(i,v){
                $(this).css('right' , $(this).css('left') ).css( 'left' , 'auto');
            });
        }
         //  Sticky Header 
       
       //  Sticky Header 
        $('.preloader').delay(1000).fadeOut("slow");
     });

     /*----------------------------------------------------*/
  /*  ScrollUp
  /*----------------------------------------------------*/  
  $.scrollUp = function (options) {

    // Defaults
    var defaults = {
      scrollName: 'scrollUp', // Element ID
      topDistance: 600, // Distance from top before showing element (px)
      topSpeed: 800, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '', // Text for element
      scrollImg: false, // Set true to use image
      activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    };

    var o = $.extend({}, defaults, options),
      scrollId = '#' + o.scrollName;

    // Create element
    $('<a/>', {
      id: o.scrollName,
      href: '#top',
      title: o.scrollText
    }).appendTo('body');
    
    // If not using an image display text
    if (!o.scrollImg) {
      $(scrollId).html('<i class="arrow-up"></i>');
    }

    // Minium CSS to make the magic happen
    $(scrollId).css({'display':'none','position': 'fixed','z-index': '99999'});

    // Active point overlay
    if (o.activeOverlay) {
      $("body").append("<div id='"+ o.scrollName +"-active'></div>");
      $(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '99999' });
    }

    // Scroll function
    $(window).on('scroll', function(){  
      switch (o.animation) {
        case "fade":
          $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
          break;
        case "slide":
          $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
          break;
        default:
          $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
      }
    });

    
    

  };
  
  $.scrollUp();



     
    
}); //end ready



