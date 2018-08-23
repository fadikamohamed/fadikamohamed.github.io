$(window).scroll(function(e){
    parallax();
});
function parallax(){

    var scrolledTop = $(window).scrollTop();
     $('#fond').css('top', -(scrolledTop * 0.2) + 'px');
	   $('#contentCV').css('top', -(scrolledTop * 0.3) + 'px');
     $('.parts').css('top', -(scrolledTop * 0.5) + 'px');
}
//first
$(function() {
$('#presentation').waypoint(function(direction) {
  if (direction == 'down') {
    $('#fond').removeClass().addClass('fond1');
  }
});
$('#presentation').waypoint(function(direction) {
  if (direction == 'up') {
    $('#fond').removeClass().addClass('fond');
  }
});


//Second
$('#f2').waypoint(function(direction) {
  if (direction == 'down') {
    $('#fond').removeClass().addClass('fond2');
  }
});
$('#f2').waypoint(function(direction) {
  if (direction == 'up') {
    $('#fond').removeClass().addClass('fond1');
  }
});



//Third
$('#f3').waypoint(function(direction) {
  if (direction === 'down') {
    $('#fond').addClass('fond3');
  }else if (direction === 'up') {
    $('#fond').removeClass().addClass('fond2');
  } else {
  }
});
$('#ancre').waypoint(function(direction) {
  if (direction === 'down') {
    $('#fond').addClass('fond4');
  }else if (direction === 'up') {
    $('#fond').removeClass().addClass('fond3');
  } else {
  }
});
});
