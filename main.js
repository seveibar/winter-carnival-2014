window.onload = function(){

  // Carousel Code

  carousel.init();

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

  var titles = [
    "Winter Carnival 2014",
    "Cardboard Sled Racing",
    "Pushball",
    "Free Food!"
  ];
  var descriptions = [
    "February 15th",
    "And more in the Winter Olympics!",
    "And other fun activities!",
    "Stop by for lunch or eat with our faculty!"
  ];
  // $("#hero-text-overlay").fadeOut(0);
  $("#hero-text-overlay p").text(titles[currentSlide]);
  $("#hero-text-overlay span").text(descriptions[currentSlide]);
  $(".carousel-bubble").click(function(){
    var idn = parseInt($(this).attr("id").split("-")[2]);
    var oldSlide = currentSlide;
    currentSlide = idn;
    timeToMove = 30;
    carousel.moveTo(currentSlide);
    $("#hero-text-overlay").fadeOut(400,function(){
          $("#hero-text-overlay p").text(titles[currentSlide]);
          $("#hero-text-overlay span").text(descriptions[currentSlide]);
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
          $("#hero-text-overlay span").text(descriptions[currentSlide]);
          if (titles[currentSlide] != ""){
            $("#hero-text-overlay").fadeIn();
          }
        });

        carousel.moveTo(currentSlide);
        timeToMove = 5;
        highlightCircle();
      }
  },250)
};