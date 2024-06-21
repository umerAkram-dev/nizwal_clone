jQuery( document ).ready(function($) {
      "use strict"

      $('.mailchimp').each(function(){
            $(this).ajaxChimp({
                url: $(this).data('posturl'),
                language: $(this).data('language'),
                callback: mccallbackFunction
            });
        })

        function mccallbackFunction (resp) {
            var parts = resp.msg.split(' - ', 2);
            if (parts[1] === undefined) {
                var msg = resp.msg;

            } else {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                    var index = parts[0];
                    var msg = parts[1];
                  
                } else {
                    var index = -1;
                    var msg = resp.msg;

                }

            }
            if (resp.result === 'success') {
                $('.subscription-success').html('<span class="icon_check_alt2"></span> ' + msg).fadeIn(1000);
                $('.subscription-error').fadeOut(500);
            }else{
                $('.subscription-error').html('<span class="icon_close_alt2"></span> ' + msg).fadeIn(1000);
            }
        }
})      