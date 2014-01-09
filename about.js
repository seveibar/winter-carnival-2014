window.onload = function(){
	var totalSlides = 4;
	carousel.init(totalSlides, 250);
	var cs = 0;
	var rpi_years = [
		"2009",
		"2012",
		"2013",
		"2014"
	];
	var rpi_names = [
		"Fire & Ice",
		"Northern Lights",
		"Absolute Zero",
		"Arctic Frost"
	];
	function getYearString(n){
		return "<span style='float:left;'>"+rpi_names[n]+"</span>  <span style='float:right;'>"+rpi_years[n]+"</span>";
	}
	$("#carousel_text_small").html(getYearString(0));
	function changeSlide(){
		carousel.moveTo(cs);
		$("#carousel_text_small span").fadeOut(300,function(){
			$("#carousel_text_small").html(getYearString(cs));
			$("#carousel_text_small span").fadeOut(0);
			$("#carousel_text_small span").fadeIn(300);
		});
		
		t = 0;
	}
	$("#carousel_larrow").click(function(){
		if (t > 2){
			if (cs == 0){
				cs = totalSlides - 1;
			}else{
				cs --;
			}
			changeSlide();
		}
	});
	$("#carousel_rarrow").click(function(){
		if (t > 2){
			cs = (cs + 1) % totalSlides;
			changeSlide();
		}
	});
	var t= 0;
	setInterval(function(){
		if (++t>20){
			cs = (cs + 1) % totalSlides;
			changeSlide();
		}
	},250);
};