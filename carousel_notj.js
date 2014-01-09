var carousel = (function () {

    var car,currentSlide = 0,oldSlide = 0;
    var lastContainerPosition = 0;
    var totalSlides;
    var slides = [];
    var width;

    function init(_totalSlides,_width){
        totalSlides = _totalSlides;
        width = _width;
        // $("#slide-container").css({right:"900px"});
        for (var i = 0;i<totalSlides;i++){
            slides.push($("#slide"+i));
        }
    }

    function mod(m,n){
        return ((m%n)+n)%n;
    }

    function moveTo(slideNumber){

        if (slideNumber == currentSlide)
            return;

        oldSlide = currentSlide;
        currentSlide = slideNumber;

        // Number of slides you would have to go through if you went forward/backward
        var slidesInFront = mod(currentSlide - oldSlide, totalSlides);
        var slidesInBack = mod(oldSlide - currentSlide, totalSlides);

        var containerPosition;

        if (slidesInFront <= slidesInBack) { // Move Right
            $("#slide-container").css({right:"0"});
            containerPosition = slidesInFront * width;

            // Reorder such that the oldslide is the first slide
            for (var i = 0;i<totalSlides;i++){
                var n = mod(i + oldSlide, totalSlides);
                $("#slide-container").append(slides[n]);
            }

        }else{ // Move left
            $("#slide-container").css({right:width * (totalSlides-1) + "px"});
            containerPosition = (totalSlides - slidesInBack - 1) * width;

            // Reorder such that the oldslide is farthest to the right
            // the slides are then in order correctly behind it
            for (var i = 0;i<totalSlides;i++){
                var n = mod(oldSlide - i, totalSlides);
                $("#slide-container").prepend(slides[n]);
            }
        }
        $("#slide-container").stop(true);
        $("#slide-container").animate({right:containerPosition+"px"},600);

        lastContainerPosition = containerPosition;
    }

    return {
        init: init,
        moveTo : moveTo
    }
})();