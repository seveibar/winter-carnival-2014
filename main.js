window.onload = function(){

  // Carousel Code
  $('.jcarousel').jcarousel({
    wrap:"circular",
    animation:1000,
    transitions:Modernizr.csstransitions ? {
        transforms:   Modernizr.csstransforms,
        transforms3d: Modernizr.csstransforms3d,
        easing:       'ease'
    } : false
  });
  var carousel = $(".jcarousel").data("jcarousel");

  var currentSlide = 0;
  var numSlides = 4;
  var timeToMove = 10;

  function highlightCircle(){
    for (var i = 0;i<numSlides;i++){
      if (i == currentSlide){
        $("#carousel-bubble-"+i).css({"opacity":1});
      }else{
        $("#carousel-bubble-"+i).css({"opacity":.75});
      }
    }
  }

  highlightCircle();

  var titles = ["","Super cool text overlay!","Rick touches his residents","So Food! Much good!"]
  $("#hero-text-overlay").fadeOut(0);
  $(".carousel-bubble").click(function(){
    var idn = parseInt($(this).attr("id").split("-")[2]);
    var oldSlide = currentSlide;
    currentSlide = idn;
    timeToMove = 5;
    if (currentSlide > oldSlide){
      carousel.scroll("+=" + (currentSlide - oldSlide));
    }
    if (currentSlide < oldSlide){
      carousel.scroll("-=" + (oldSlide - currentSlide));
    }
    $("#hero-text-overlay").fadeOut(400,function(){
          $("#hero-text-overlay p").text(titles[currentSlide]);
          if (titles[currentSlide] != ""){
            $("#hero-text-overlay").fadeIn();
          }
        });
    // $('.jcarousel').jcarousel('scroll', $("#slide" + idn));
    highlightCircle();
  });

  setInterval(function(){
      timeToMove -= .25;
      if (timeToMove<=0){
        currentSlide = (currentSlide + 1) % numSlides;
        $("#hero-text-overlay").fadeOut(400,function(){
          $("#hero-text-overlay p").text(titles[currentSlide]);
          if (titles[currentSlide] != ""){
            $("#hero-text-overlay").fadeIn();
          }
        });

        carousel.scroll("+=1");
        timeToMove = 5;
        highlightCircle();
      }
  },250)
};