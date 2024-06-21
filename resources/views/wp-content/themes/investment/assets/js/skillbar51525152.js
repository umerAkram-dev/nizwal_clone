jQuery( document ).ready(function($) {
    "use strict"
	$('.skillbar').waypoint(function(direction) {
		$('.skillbar[data-percent]').each(function () {
			var skillbarWrapper = $(this);
		    var progress = $(this).find('span.skill-bar-percent');
		    var percentage = Math.ceil($(this).attr('data-percent'));
		    if(!skillbarWrapper.hasClass('done')){
			    $({countNum: 0}).animate({countNum: percentage}, {
			      duration: 4000,
			      step: function() {
			        // What todo on every count
			      var pct = '';
			      if(percentage == 0){
			        pct = Math.floor(this.countNum) + '%';
			      }else{
			        pct = Math.floor(this.countNum+1) + '%';
			      }
			      progress.text(pct) && skillbarWrapper.find('.skillbar-bar').css('width',pct);
			      skillbarWrapper.addClass('done');
			      }
			    });
			  }  
		  });
		
	}, {
		offset: '50%'
	});
})	