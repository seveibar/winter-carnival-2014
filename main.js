window.onload = function(){

  // Carousel Code

  var currentSlide = 0;
  var numSlides = 7;
  var timeToMove = 10;

  carousel.init(numSlides,900);

  function highlightCircle(){
    for (var i = 0;i<numSlides;i++){
      if (i == currentSlide){
        $("#carousel-bubble-"+i).css({"opacity":1});
      }else{
        $("#carousel-bubble-"+i).css({"opacity":.75});
      }
    }
  }

  function changeSlide(newSlide){
    currentSlide = newSlide;
    carousel.moveTo(currentSlide);
    $("#hero-text-overlay").fadeOut(400,function(){
        if (newSlide == 0){
          $("#hero-text-overlay span").addClass("dateslide");
        }else{
          $("#hero-text-overlay span").removeClass("dateslide");
        }
          $("#hero-text-overlay p").html(titles[currentSlide]);
          $("#hero-text-overlay span").html(descriptions[currentSlide]);
          if (titles[currentSlide] != ""){
            $("#hero-text-overlay").fadeIn();
          }
          if (descriptions[currentSlide] == ""){
            $("#hero-text-overlay span").fadeOut(0);
          }else{
            $("#hero-text-overlay span").fadeIn(0);
          }
        });
    highlightCircle();
  }

  highlightCircle();

  var titles = [
    "Winter Carnival 2014",
    "Cardboard Sled Racing",
    "Pushball",
    "Carnival Games",
    "Make new friends!",
    "Yell at your hands!",
    "Snowboarding"
  ];
  var descriptions = [
    "February 15th",
    "And more in the Winter Olympics!",
    "",
    "",
    "Meet new people from all over campus!",
    "They know what they did!",
    "Show off your moves!"
  ];


  $("#hero-text-overlay p").html(titles[currentSlide]);
  $("#hero-text-overlay span").addClass("dateslide");
  $("#hero-text-overlay span").html(descriptions[currentSlide]);
  $(".carousel-bubble").click(function(){
    var idn = parseInt($(this).attr("id").split("-")[2]);
    var oldSlide = currentSlide;
    currentSlide = idn;
    timeToMove = 15;
    changeSlide(idn);
  });

  setInterval(function(){
      timeToMove -= .25;
      if (timeToMove<=0){
        changeSlide((currentSlide + 1) % numSlides);
        timeToMove = 5;
      }
  },250)
};