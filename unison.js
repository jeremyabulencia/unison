(function($) {
    $.fn.mergeElements = function (options) {
        var settings = $.extend({
            mergePoint: $(this).width()*.5
        },options);

        return this.each(function() {
            var $containerElement = $(this);
            var $containerWidth = $containerElement.width();
            var $containerHalfWidth = settings.mergePoint;
            var $leftElement = $(this).find('.left-element');
            var $rightElement = $(this).find('.right-element');
            var $leftPosition = 0;
            var $rightPosition = 0;
            var $scrollTop = $(window).scrollTop();

            $leftElement.append('<img src="resources/images/groom.png" alt="" width="100" height="100">');
            $rightElement.append('<img src="resources/images/bride.png" alt=""width="100" height="100">');

            $containerElement.css({
                "position":"fixed",
                "margin":"auto",
                "width":"80%",
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

            function positioning(scrollTopValue){
                if (scrollTopValue <= $containerHalfWidth) {
                    $leftElement.css("left",scrollTopValue);
                    $rightElement.css("right",scrollTopValue);
                } else {
                    $leftElement.css("left",$containerHalfWidth);
                    $rightElement.css("right",$containerHalfWidth);
                }            
            }

            positioning($scrollTop);

            $(window).scroll(function () {
                $scrollTop = $(window).scrollTop();
                $leftPosition = $scrollTop;
                $rightPosition = $scrollTop;
                
                positioning($scrollTop);
            });

        });
    }
})(jQuery);