var carousel = (function () {

    var car,currentSlide = 0,oldSlide = 0;

    function init(){
        $('.jcarousel').jcarousel({
            wrap:"circular",
            animation:1000,
            transitions:Modernizr.csstransitions ? {
                transforms:   Modernizr.csstransforms,
                transforms3d: Modernizr.csstransforms3d,
                easing:       'ease'
            } : false
        });
        car = $(".jcarousel").data("jcarousel");
    }

    function moveTo(slideNumber){
        oldSlide = currentSlide;
        currentSlide = slideNumber;
        if (currentSlide > oldSlide){
          car.scroll("+=" + (currentSlide - oldSlide));
        }
        if (currentSlide < oldSlide){
          car.scroll("-=" + (oldSlide - currentSlide));
        }
    }

    return {
        init: init,
        moveTo : moveTo
    }
})();