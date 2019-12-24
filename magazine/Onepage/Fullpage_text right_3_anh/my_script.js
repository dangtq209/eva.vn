// FullPage
var FullPage = function() {
    "use strict";

    // Handle FullPage
    var handleFullPage = function() {
        if($('#fullpage').length >= 1 && $('#fullpage').css('display') != 'none'){
            var count_image = $('#fullpage .section').length;
            var arrArchor = [],arrTooltips = [];
            for(var i = 1;i <= count_image;i++){
                if(i < count_image) arrArchor.push('page-'+i);
                else arrArchor.push('last-page');
            }
            // $('#fullpage .section').each(function(k,v){
            //     var text_first = 'Trang nhất';
            //     if(typeof site_id != 'undefined' && site_id == 1003888) text_first = 'Page 1';
            //     if(k == 0) arrTooltips.push(text_first);
            //     else{
            //         arrTooltips.push($(this).attr('data-credit'));
            //     }
            // })
            // $('.wrapper').css('margin','0');
            // $('#topbar').addClass('topbar_transparent');
            $('#fullpage').fullpage({
                anchors : arrArchor,
                navigation: true,
                navigationPosition: 'right',
                navigationTooltips : arrTooltips,
                onLeave: function(index, nextIndex, direction){
                    // if(nextIndex > 1)
                    // {
                    //     $('#to_top').show();
                    // }
                    // else
                    // {
                    //     $('#to_top').hide();
                    // }
                }
            });
            // $('#to_top').bind('click', function(){
            //     if(typeof $.fn.fullpage != 'undefined'){
            //         return $.fn.fullpage.moveTo(1);
            //     }
            // })
        }
    }

    return {
        init: function() {
            handleFullPage(); // initial setup for fullPage
        }
    }
}();
// Handle Caption
var handleCaptionImage = function() {
    $('.warp-text')
    .on('mouseenter', function(){
        $('.toggle-caption').parents('.fp-tableCell').find('.caption').addClass('is-show');
        $('.toggle-caption').parents('.fp-tableCell').find('.warp-text').addClass('is-warp');
        $('.toggle-caption').hide();
    })
    .on('mouseleave', function(){
        $('.toggle-caption').parents('.fp-tableCell').find('.caption').removeClass('is-show');
        $('.toggle-caption').parents('.fp-tableCell').find('.warp-text').removeClass('is-warp');
        $('.toggle-caption').show();
    });
}
$(document).ready(function() {
    FullPage.init();
    handleCaptionImage();
});