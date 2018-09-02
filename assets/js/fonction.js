$(window).scroll(function(e){
  parallax();
});
function parallax(){

  var scrolledTop = $(window).scrollTop();
  $('#pageBackground').css('top', -(scrolledTop * 0.2) + 'px');
  $('#contentCV').css('top', -(scrolledTop * 0.3) + 'px');
  $('.parts').css('top', -(scrolledTop * 0.5) + 'px');
}
$(function() {
  $('#presentation').waypoint(function(direction) {
    if (direction == 'down') {
      $('#pageBackground').removeClass().addClass('pageBackground1');
    }
  });
  $('#presentation').waypoint(function(direction) {
    if (direction == 'up') {
      $('#pageBackground').removeClass().addClass('pageBackground');
    }
  });
  //Second
  $('#f2').waypoint(function(direction) {
    if (direction == 'down') {
      $('#pageBackground').removeClass().addClass('pageBackground2');
    }
  });
  $('#f2').waypoint(function(direction) {
    if (direction == 'up') {
      $('#pageBackground').removeClass().addClass('pageBackground1');
    }
  });
  //Third
  $('#f3').waypoint(function(direction) {
    if (direction === 'down') {
      $('#pageBackground').addClass('pageBackground3');
    }else if (direction === 'up') {
      $('#pageBackground').removeClass().addClass('pageBackground2');
    } else {
    }
  });
  $('#pointOfInterest').waypoint(function(direction) {
    if (direction === 'down') {
      $('#pageBackground').addClass('pageBackground4');
    }else if (direction === 'up') {
      $('#pageBackground').removeClass().addClass('pageBackground3');
    } else {
    }
  });
});
