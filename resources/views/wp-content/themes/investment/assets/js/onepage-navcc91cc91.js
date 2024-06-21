/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */


jQuery(document).ready(function($){
	// OnePageNav
	var top_offset = 80;
	if($('.onepage-nav').length){
		$('.onepage-nav a[href^="#"], .onepage-nav a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
			
			e.preventDefault();

			var target = this.hash,
				$target = jQuery(target);

		
			$(".toggle-button > .menu-button").trigger('click');

				

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
			}, 'slow', 'easeInSine', function () {
				window.location.hash = '1' + target;				
			});
			
		});
	}

	
		$('section a[href^="#"]').on("click", function(event) {
	      if(($(this.hash).length) && (!$(this).closest('div').hasClass('vc_tta-panel-heading'))){
	        event.preventDefault();
	        $('html,body').animate({
	        scrollTop: $(this.hash).offset().top - 68},
	        1000);	       
	      }  
	  });

	  /*sticky nav*/
	  $(window).scroll(function(){
		if ($(window).scrollTop() >= 100) {
		  $('.navbar-sticky-on').addClass('fixed-nav');
		  $('.navbar-sticky-on').addClass('navbar-light').removeClass('navbar-dark');
		 }
		 else {
		  $('.navbar-sticky-on').removeClass('fixed-nav');
		  $('.navbar-sticky-on').addClass('navbar-dark').removeClass('navbar-light');
		 }
	  });
	
})