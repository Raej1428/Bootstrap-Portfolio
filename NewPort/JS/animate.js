window.onload = function () {
  var element = $('#cOne');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceIn animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

      // execute the animation again
      $(e.target).removeClass('bounceIn animated');

    });

  });

  var element = $('#cTwo');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceInDown animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

      // execute the animation again
      $(e.target).removeClass('bounceInDown animated');

    });

  });

  var element = $('#cThree');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceInLeft animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

      // execute the animation again
      $(e.target).removeClass('bounceInLeft animated');

    });

  });

  var element = $('#cFour');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceInRight animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

      // execute the animation again
      $(e.target).removeClass('bounceInRight animated');

    });

  });

  var element = $('#cFive');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceInUp animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

      // execute the animation again
      $(e.target).removeClass('bounceInUp animated');

    });

  });

  var element = $('#square');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('hinge animated');

    // animation ends
    // element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

    //  // execute the animation again
    //   $(e.target).removeClass('hinge animated');

    // });

  });

  var element = $('#cSeven');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('rollIn animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

      // execute the animation again
      $(e.target).removeClass('rollIn animated');

    });

  });

  var element = $('#square');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('rollOut animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

      // execute the animation again
      $(e.target).removeClass('rollOut animated');

    });

  });
}
