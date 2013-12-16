window.onload = function(){

  // var canvas = $("#canvas")[0];
  // canvas.height = 120;
  // canvas.width = 900;
  // var context = canvas.getContext("2d");
  // var imgs = [];
  // var imgsLoaded = 0;
  // var totalImagesToLoad = 3;
  // for (var i = 0; i < totalImagesToLoad; i++){
  //   imgs.push(new Image());
  //   imgs[i].src = "imgs/img9x"+(i+1)+".png";
  //   imgs[i].onload = function(){
  //     imgsLoaded ++;
  //     if (imgsLoaded == totalImagesToLoad){
  //       allImagesLoaded();
  //     }
  //   };
  // }
  // function switchHeaderImage(img0,img1){
  //   var at = 0;
  //   var tt = 48;
  //   var i1 = imgs[img0];
  //   var i2 = imgs[img1];
  //   var anim = setInterval(function(){
  //     at++;
  //     // var p = Math.pow(at/tt,5);
  //     var p = 3/2 * -4. * (-0.5 * Math.pow(at/tt,2)+0.333333 * Math.pow(at/tt,3)); 
  //     context.drawImage(i1,0,-p*120);
  //     context.drawImage(i2,0,120-p*120);

  //     if (at == tt){
  //       clearInterval(anim);
  //       return;
  //     }
  //   },1000/30);
  // }
  // function allImagesLoaded(){
  //   var currentImage = 0;
  //   switchHeaderImage(1,0);
  //   setInterval(function(){
  //     var nextImage = (currentImage+1) % imgs.length;
  //     switchHeaderImage(currentImage,nextImage);
  //     currentImage = nextImage;
  //   },5000);
  // }
};