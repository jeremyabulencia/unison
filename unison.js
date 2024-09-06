(function($) {
    $.fn.unison = function (options) {
        var settings = $.extend({
            leftImg:"resources/images/groom.png",
            rightImg:"resources/images/bride.png",
        },options);

        return this.each(function() {
            var $window = $(window);
            var $body = $('body');
            var $containerElement = $(this);
            var $containerHalfWidth;
            var $leftElement = $(this).find('.left-element');
            var $rightElement = $(this).find('.right-element');
            var $leftPosition = 0;
            var $rightPosition = 0;
            var $scrollTop = $(window).scrollTop();

            // setting up elements start
            $leftElement.append('<img src="'+settings.leftImg+'" alt="" width="100" height="100">');
            $rightElement.append('<img src="'+settings.rightImg+'" alt=""width="100" height="100">');

            $containerElement.css({
                "position":"fixed",
                "margin":"auto",
                "width":"100%",
                "display":"inline",
            });
            $leftElement.css({
                "width":"auto",
                "position":"absolute",
                "left":$leftPosition,
            })
            $rightElement.css({
                "width":"auto",
                "position":"absolute",
                "right":$rightPosition,
            })
            // setting up elements end

            // animation
            function positioning(scrollTopValue){
                $unisonContainerWidth = $containerElement.width();
                $containerHalfWidth = ($unisonContainerWidth/2)-$leftElement.find('img').width();
                if (scrollTopValue >= 0 && scrollTopValue <= $containerHalfWidth) {
                    $leftElement.css("left",scrollTopValue);
                    $rightElement.css("right",scrollTopValue);
                } else {
                    $leftElement.css("left",$containerHalfWidth);
                    $rightElement.css("right",$containerHalfWidth);
                }            
            }

            positioning($scrollTop/(($body.height()-200)/$body.width()));

            $(window).scroll(function () {
                $scrollTop = $window.scrollTop();
                $leftPosition = $scrollTop;
                $rightPosition = $scrollTop;
                
                positioning($scrollTop/(($body.height()-200)/$body.width()));
            });

            $(window).resize(function() {
                $scrollTop = $window.scrollTop();
                $containerHalfWidth = settings.mergePoint;

                positioning($scrollTop/(($body.height()-200)/$body.width()));
            })
        });
    }
})(jQuery);