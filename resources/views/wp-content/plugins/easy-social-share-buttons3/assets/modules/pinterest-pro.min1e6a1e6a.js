!function(i){"use strict";if(!e)var e=function(i,e){var t,s,n,a;return function(){n=this,s=[].slice.call(arguments,0),a=new Date;var o=function(){var r=new Date-a;r<e?t=setTimeout(o,e-r):(t=null,i.apply(n,s))};t||(t=setTimeout(o,e))}};i(document).ready(function(){if(window.essbCurrentPinImageCount=0,essb_settings.force_pin_description&&essb_settings.pin_description&&i("img").each(function(){i(this).data("pin-description")||i(this).attr("data-pin-description",essb_settings.pin_description)}),essb_settings.pin_pinid_active&&essb_settings.pin_pinid&&i("img").each(function(){var e=i(this).data("pin-id")||"";e&&""!=e||i(this).attr("data-pin-id",essb_settings.pin_pinid)}),essb_settings.pin_force_active&&essb_settings.pin_force_image&&i("img").each(function(){if(i(this).attr("data-pin-media",essb_settings.pin_force_image),!i(this).data("pin-description")){var e="";i(this).attr("title")?e=i(this).attr("title"):i(this).attr("alt")&&(e=i(this).attr("alt")),essbPinImages.force_custompin&&!essbPinImages.custompin&&(essbPinImages.custompin=document.title),essbPinImages.custompin&&(e=essbPinImages.custompin),""==e&&(e=document.title),i(this).attr("data-pin-description",e)}i(this).data("pin-url")||i(this).attr("data-pin-url",encodeURI(document.URL))}),i(".essb-block-image").each(function(){var e=i(this).data("essb-pin-id")||"",t=i(this).data("essb-pin-description")||"";if("true"==(i(this).data("essb-pin-nopin")||"").toString()){i(this).find("img").attr("data-pin-nopin","true"),i(this).find("img").addClass("no_pin");return}""!=e&&i(this).find("img").attr("data-pin-id",e),""!=t&&i(this).find("img").attr("data-pin-description",t)}),essb_settings.force_pin_thumbs){var t=window.essbReposiveImagesMap={},s=window.essbDetectAndLocateImageSize=function(e,s,a){a&&(t[s].responsive[e]={}),i("<img/>",{load:function(){t[s]&&(a?(t[s].responsive[e]={w:this.width,h:this.height,done:!0},n(s)):(t[s].originalSize={w:this.width,h:this.height,done:!0},n(s)))},src:e})},n=window.essbCompileTheDataPinImage=function(e){var s=0,n=0,o=0,r="";for(var p in t[e].responsive){var d=t[e].responsive[p]||{};s++,d.done&&(n++,(0==o||o<d.w)&&(o=d.w,r=p))}s==n&&t[e].original!=r&&t[e].originalSize.done&&o>t[e].originalSize.w&&(i('[data-pinpro-key="'+e+'"]').attr("data-pin-media",r),i('[data-pinpro-key="'+e+'"]').attr("data-media",r),i('[data-pinpro-key="'+e+'"]').attr("data-pin-url",window.location.href),i('[data-pinpro-key="'+e+'"]').removeClass("pin-process"),i('[data-pinpro-key="'+e+'"]').each(a))};i("img").each(function(){var e=i(this).attr("srcset")||"",n=Math.random().toString(36).substr(2,9),a=n;if(e&&""!=e){i(this).attr("data-pinpro-key",n),i(this).addClass("pin-process");var o=e.split(", "),r=i(this).attr("src")||"";t[a]={source:a,original:r,originalSize:{},responsive:{}},s(r,a);for(var p=0;p<o.length;p++)if(o[p]){var d=o[p].split(" "),l=d[0]||"",c=(d[1]||"").replace("w","");l&&Number(c)&&s(l,a,!0)}}})}var a=function(){var e=i(this);if(!(essbPinImages.nolinks&&i(e).parents().filter("a").length||e.outerWidth()<Number(essbPinImages.min_width||0)||e.outerHeight()<Number(essbPinImages.min_height||0)||e.hasClass("no_pin")||e.hasClass("no-pin")||e.data("pin-nopin")||e.hasClass("pin-generated")||e.hasClass("pin-process")||e.hasClass("zoomImg")||e.hasClass("lazy-hidden"))){var t=i(e).prop("src")||"",s="",n=[],a="",o="",r=i(e).data("pin-id")||"";if(!(t.indexOf("data:image/svg+xml")>-1||t.indexOf("data:image/gif")>-1)){e.data("media")&&(t=e.data("media")),e.data("lazy-src")&&(t=e.data("lazy-src")),e.data("pin-media")&&(t=e.data("pin-media")),e.data("pin-description")?s=e.data("pin-description"):e.attr("title")?s=e.attr("title"):e.attr("alt")&&(s=e.attr("alt")),essbPinImages.force_custompin&&!essbPinImages.custompin&&(essbPinImages.custompin=document.title),essbPinImages.custompin&&(s=essbPinImages.custompin),""==s&&(s=document.title);var p="https://pinterest.com/pin/create/button/?url="+encodeURI(document.URL)+"&is_video=false&media="+encodeURI(t)+"&description="+encodeURIComponent(s);essbPinImages.legacy_share_cmd&&(p="https://pinterest.com/pin/create/bookmarklet/?url="+encodeURI(document.URL)+"&media="+encodeURI(t)+"&title="+encodeURIComponent(s)+"&description="+encodeURIComponent(s)+"&media="+encodeURI(t)),p.indexOf("'")>-1&&(p=p.replace(/'/g,"%27")),""!=r&&(p="https://www.pinterest.com/pin/"+r+"/repin/x/");var d=e.attr("class"),l=e.attr("style");if("icon_hover"==essbPinImages.button_style&&(a=" essb_hide_name"),"icon"==essbPinImages.button_style&&(a=" essb_force_hide_name essb_force_hide"),"button_name"==essbPinImages.button_style&&(a=" essb_hide_icon"),"vertical"==essbPinImages.button_style&&(a=" essb_vertical_name"),essbPinImages.button_size&&(o=" essb_size_"+essbPinImages.button_size),essbPinImages.animation&&(o+=" "+essbPinImages.animation),essbPinImages.position&&(o+=" essb_pos_"+essbPinImages.position),essbPinImages.mobile_position&&(o+=" essb_mobilepos_"+essbPinImages.mobile_position),essbPinImages.visibility&&"always"==essbPinImages.visibility&&(o+=" essb_always_visible"),e.removeClass().attr("style","").wrap('<div class="essb-pin" />'),""!=d&&e.parent(".essb-pin").addClass(d),""!=l&&e.parent(".essb-pin").attr("style",l),window.essbCurrentPinImageCount++,e.parent(".essb-pin").addClass("essb-pinid-"+window.essbCurrentPinImageCount.toString()),essbPinImages.reposition){var c=i(e).width();Number(c)&&!isNaN(c)&&Number(c)>0&&e.parent(".essb-pin").css({"max-width":c+"px"})}var h=new Date().getTime().toString(36),m=essbPinImages.svgIcon?"essb_icon_svg_pinterest":"essb_icon_pinterest";n.push('<div class="essb_links essb_displayed_pinimage essb_template_'+essbPinImages.template+o+" essb_"+h+'" data-essb-position="pinit" data-essb-postid="'+(essb_settings.post_id||"")+'" data-essb-instance="'+h+'">'),n.push('<ul class="essb_links_list'+(""!=a?" "+a:"")+'">'),n.push('<li class="essb_item essb_link_pinterest nolightbox'+(essbPinImages.svgIcon?" essb_link_svg_icon":"")+'">'),n.push('<a class="nolightbox'+(essbPinImages.template_a_class?" "+essbPinImages.template_a_class:"")+'" rel="noreferrer noopener nofollow" href="'+p+'" onclick="essb.window(&#39;'+p+"&#39;,&#39;pinpro&#39;,&#39;"+h+'&#39;); return false;" target="_blank"><span class="essb_icon '+m+(essbPinImages.template_icon_class?" "+essbPinImages.template_icon_class:"")+'">'+(essbPinImages.svgIcon||"")+'</span><span class="essb_network_name">'+(essbPinImages.text?essbPinImages.text:"Pin")+"</span></a>"),n.push("</li>"),n.push("</ul>"),n.push("</div>"),e.after(n.join("")),e.addClass("pin-generated"),e.parent(".essb-pin").hasClass("lazyloading")&&e.parent(".essb-pin").removeClass("lazyloading")}}};if("undefined"!=typeof essbPinImages&&i("body").hasClass("tcb-edit-mode")&&(essbPinImages.active=!1),"undefined"!=typeof essbPinImages&&essbPinImages.active){essbPinImages.min_width&&Number(essbPinImages.min_width)||(essbPinImages.min_width=300),essbPinImages.min_height&&Number(essbPinImages.min_height)||(essbPinImages.min_height=300),720>i(window).width()&&(Number(essbPinImages.min_width_mobile)&&(essbPinImages.min_width=Number(essbPinImages.min_width_mobile)),Number(essbPinImages.min_height_mobile)&&(essbPinImages.min_height=Number(essbPinImages.min_height_mobile))),i(".essb-pin.tve_image").length&&(i(".essb-pin.tve_image .essb_links").remove(),i(".essb-pin img").removeClass("pin-generated")),i(".rll-youtube-player img").each(function(){i(this).addClass("no-pin")}),essbPinImages.hideon&&i(essbPinImages.hideon).each(function(){i(this).addClass("no-pin")}),window.addEventListener("LazyLoad::Initialized",function(e){i(".rll-youtube-player img").each(function(){i(this).addClass("no-pin")})});var o=function(){if(i(".rll-youtube-player img").each(function(){i(this).addClass("no-pin")}),essbPinImages.hideon&&i(essbPinImages.hideon).each(function(){i(this).addClass("no-pin")}),essbPinImages.selector)i(essbPinImages.selector).each(a);else{if(!i(".essb-pinterest-images").length)return;i(".essb-pinterest-images").parent().find("img").each(a)}};if(essbPinImages.lazyload&&i(window).on("scroll",e(o,10)),essbPinImages.optimize_load){let r=["keydown","mousedown","mousemove","wheel","touchmove","touchstart","touchend"];function p(){r.forEach(function(i){window.removeEventListener(i,p,{passive:!0})}),document.removeEventListener("visibilitychange",p),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",d):d()}function d(){setTimeout(o,1)}r.forEach(function(i){window.addEventListener(i,p,{passive:!0})}),document.addEventListener("visibilitychange",p)}else setTimeout(o,1)}("undefined"!=typeof essbPinImages&&!essbPinImages.active||"undefined"==typeof essbPinImages)&&i(".essb-pin.tve_image").length&&(i(".essb-pin.tve_image .essb_links").remove(),i(".essb-pin img").removeClass("pin-generated"))})}(jQuery);