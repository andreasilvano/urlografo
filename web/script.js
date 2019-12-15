$('body').removeClass('hideOverflow');

if(window.innerWidth>900) {
var img = new Image();
  var clearCanvas;
  var fader;
img.src="./assets/brush1r.png";
img.width=360;

function distanceBetween(point1,point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x,2)+Math.pow(point2.y - point1.y, 2));
}

function angleBetween(point1, point2) {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
}

function getRandomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

const canv = document.getElementById('titleCanvas');
const ctx = canv.getContext('2d');
ctx.lineJoin = ctx.lineCap = 'round';
ctx.canvas.width=innerWidth;
ctx.canvas.height=innerHeight;

var isDrawing, lastPoint;
canv.onmousedown = function(e) {
  isDrawing=true;
  lastPoint = {x: e.clientX, y:e.clientY};
  clearInterval(clearCanvas);
  clearTimeout(fader);
};

canv.onmousemove = function(e) {
  if(!isDrawing) return;

  var currentPoint = {x: e.clientX, y: e.clientY};
  var dist = distanceBetween(lastPoint, currentPoint);
  var angle = angleBetween(lastPoint, currentPoint);
  for(var i=0; i<dist; i+=35) {
    x=lastPoint.x+(Math.sin(angle)*i);
    y=lastPoint.y+(Math.cos(angle)*i);
    ctx.save();
    ctx.translate(Math.random(0,10)+x,Math.random(0,10)+y);
    ctx.scale(0.9,0.9);
    ctx.globalAlpha=0.4;
    // ctx.rotate(Math.PI*100/getRandomInt(30,360));
    ctx.rotate(getRandomInt(30,360));
    ctx.drawImage(img,-img.width/2,-img.width/2);
    ctx.restore();
  }

  lastPoint=currentPoint;
};
canv.onmouseup=function() {
  isDrawing = false;
  fader=setTimeout(fadeCanvas,800);
};

function fadeCanvas() {
  clearCanvas=setInterval(function() {
  ctx.save();
  ctx.globalAlpha = 0.15;
  ctx.globalCompositeOperation='destination-out';
  ctx.fillStyle= '#FFF';
  ctx.fillRect(0,0,canv.width, canv.height);
  ctx.restore();

  },30);
}

function windowResized() {
  ctx.canvas.width=innerWidth;
  ctx.canvas.height=innerHeight;
}

  $(window).bind('wheel', function(event){
  var pagePos = $("body").scrollTop();
  var scrollVal = event.originalEvent.deltaY;

    if(scrollVal>0 && pagePos>=0){
      $('#c2').addClass('vidToTop');
      setTimeout(showPage,500)
    }

    else if(scrollVal<0 && pagePos<=0){
      $('#c2').removeClass('vidToTop');
      setTimeout(hidePage,500)
    }

    if($('body').scrollTop()>=0){
      $('#s1').addClass('active');
      $('#s2').removeClass('active');
      $('#s3').removeClass('active');
      $('#s4').removeClass('active');
      $('#s4b').removeClass('active');
      $('#s5').removeClass('active');
    }
    if($('#c2').hasClass('vidToTop')){
      $('#s1').removeClass('active');
      $('#s2').addClass('active');
      $('#s3').removeClass('active');
      $('#s4').removeClass('active');
      $('#s4b').removeClass('active');
      $('#s5').removeClass('active');
    }
    if($('body').scrollTop()>=500){
      $('#s1').removeClass('active');
      $('#s2').removeClass('active');
      $('#s3').addClass('active');
      $('#s4').removeClass('active');
      $('#s4b').removeClass('active');
      $('#s5').removeClass('active');
    }
    if($('body').scrollTop()>=1200){
      $('#s1').removeClass('active');
      $('#s2').removeClass('active');
      $('#s3').removeClass('active');
      $('#s4').addClass('active');
      $('#s4b').removeClass('active');
      $('#s5').removeClass('active');
    }
    if($('body').scrollTop()>=2000){
      $('#s1').removeClass('active');
      $('#s2').removeClass('active');
      $('#s3').removeClass('active');
      $('#s4').removeClass('active');
      $('#s4b').addClass('active');
      $('#s5').removeClass('active');
    }
    if($('body').scrollTop()>=5000){
      $('#s1').removeClass('active');
      $('#s2').removeClass('active');
      $('#s3').removeClass('active');
      $('#s4').removeClass('active');
      $('#s4b').removeClass('active');
      $('#s5').addClass('active');
    }
  });

function showPage() {
  $('body').removeClass('hideOverflow');
  $('#c2').addClass('vidToTop');
  $('#c3').removeClass('hideDisplay');
  $('#c4').removeClass('hideDisplay');
  $('#c4b').removeClass('hideDisplay');
  $('#c5').removeClass('hideDisplay');
}
function hidePage() {
  $('body').addClass('hideOverflow');
  $('#c2').removeClass('vidToTop');
  $('#c3').addClass('hideDisplay');
  $('#c4').addClass('hideDisplay');
  $('#c4b').addClass('hideDisplay');
  $('#c5').addClass('hideDisplay');
}

$('#sel1').click(function() {
  goTo1();
});
$('#sel2').click(function() {
  goTo2();
});
$('#sel3').click(function() {
  goTo3();
});
$('#sel4').click(function() {
  goTo4();
});
$('#sel4b').click(function() {
  goTo4b();
});
$('#sel5').click(function() {
  goTo5();
});

function goTo1() {
  showPage();
  $('body').animate({scrollTop: $('#c1').offset().top},500);
  $('#c2').removeClass('vidToTop');

  $('#s1').addClass('active');
  $('#s2').removeClass('active');
  $('#s3').removeClass('active');
  $('#s4').removeClass('active');
  $('#s4b').removeClass('active');
  $('#s5').removeClass('active');
}

function goTo2() {
  showPage();
  $('body').animate({scrollTop: $('#c1').offset().top},500);
  $('#c2').addClass('vidToTop');

  $('#s1').removeClass('active');
  $('#s2').addClass('active');
  $('#s3').removeClass('active');
  $('#s4').removeClass('active');
  $('#s4b').removeClass('active');
  $('#s5').removeClass('active');
}

function goTo3() {
  showPage();
  $('body').animate({scrollTop: $('#c3').offset().top-50},500);

  $('#s1').removeClass('active');
  $('#s2').removeClass('active');
  $('#s3').addClass('active');
  $('#s4').removeClass('active');
  $('#s4b').removeClass('active');
  $('#s5').removeClass('active');
}

function goTo4() {
  showPage();
  $('body').animate({scrollTop: $('#c4').offset().top-50},500);

  $('#s1').removeClass('active');
  $('#s2').removeClass('active');
  $('#s3').removeClass('active');
  $('#s4').addClass('active');
  $('#s4b').removeClass('active');
  $('#s5').removeClass('active');
}
function goTo4b() {
  showPage();
  $('body').animate({scrollTop: $('#c4b').offset().top-50},500);

  $('#s1').removeClass('active');
  $('#s2').removeClass('active');
  $('#s3').removeClass('active');
  $('#s4').removeClass('active');
  $('#s4b').addClass('active');
  $('#s5').removeClass('active');
}

function goTo5() {
  showPage();
  $('body').animate({scrollTop: $('#c5').offset().top-42},500);

  $('#s1').removeClass('active');
  $('#s2').removeClass('active');
  $('#s3').removeClass('active');
  $('#s4').removeClass('active');
  $('#s4b').removeClass('active');
  $('#s5').addClass('active');
}

$('#altruismW').hover(
       function(){$('#altruism').removeClass('hideDisplay')},
       function(){$('#altruism').addClass('hideDisplay')}
)
$('#anxietyW').hover(
       function(){$('#anxiety').removeClass('hideDisplay')},
       function(){$('#anxiety').addClass('hideDisplay')}
)
$('#distractionW').hover(
       function(){$('#distraction').removeClass('hideDisplay')},
       function(){$('#distraction').addClass('hideDisplay')}
)
$('#doubtW').hover(
       function(){$('#doubt').removeClass('hideDisplay')},
       function(){$('#doubt').addClass('hideDisplay')}
)
$('#fearW').hover(
       function(){$('#fear').removeClass('hideDisplay')},
       function(){$('#fear').addClass('hideDisplay')}
)
$('#indifferenceW').hover(
       function(){$('#indifference').removeClass('hideDisplay')},
       function(){$('#indifference').addClass('hideDisplay')}
)
$('#intransigenceW').hover(
       function(){$('#intransigence').removeClass('hideDisplay')},
       function(){$('#intransigence').addClass('hideDisplay')}
)
$('#perfectionW').hover(
       function(){$('#perfection').removeClass('hideDisplay')},
       function(){$('#perfection').addClass('hideDisplay')}
)
$('#pityW').hover(
       function(){$('#pity').removeClass('hideDisplay')},
       function(){$('#pity').addClass('hideDisplay')}
)
$('#respectW').hover(
       function(){$('#respect').removeClass('hideDisplay')},
       function(){$('#respect').addClass('hideDisplay')}
)
$('#selfishnessW').hover(
       function(){$('#selfishness').removeClass('hideDisplay')},
       function(){$('#selfishness').addClass('hideDisplay')}
)
$('#vacuityW').hover(
       function(){$('#vacuity').removeClass('hideDisplay')},
       function(){$('#vacuity').addClass('hideDisplay')}
)
}

// else{
//   $(window).unbind('wheel');
//   $('#c3').removeClass('hideDisplay');
//   $('#c4').removeClass('hideDisplay');
//   $('#c4b').removeClass('hideDisplay');
//   $('#c5').removeClass('hideDisplay');
//   $('body').removeClass('hideOverflow');
//
// }

// GALLERY TRANSITION
// var imgFirst = document.getElementById('imgFirst'),
//     imgSecond = document.getElementById('imgSecond');
//
// var click=0;
//
// window.addEventListener("click", function() {click++})
//
// window.addEventListener("click", function() {
//   if(click==1) {
//   imgFirst.classList.add('move-first');
//   imgSecond.classList.add('move-second');
//   }
//   if(click==2) {
//   imgFirst.classList.remove('move-first');
//   imgSecond.classList.remove('move-second');
//   click=0;
//   }
// });
// console.log(click);
