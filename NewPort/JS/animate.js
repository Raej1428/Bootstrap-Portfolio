window.onload = function () {
  var element = $('.card');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceIn animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

     // execute the animation again
      $(e.target).removeClass('bounceIn animated');

    });

  });

  var element = $('.card');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceInDown animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

     // execute the animation again
      $(e.target).removeClass('bounceInDown animated');

    });

  });

  var element = $('.card');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceInLeft animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

     // execute the animation again
      $(e.target).removeClass('bounceInLeft animated');

    });

  });

  var element = $('.card');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceInRight animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

     // execute the animation again
      $(e.target).removeClass('bounceInRight animated');

    });

  });

  var element = $('.card');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('bounceInUp animated');

    // animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

     // execute the animation again
      $(e.target).removeClass('bounceInUp animated');

    });

  });

  var element = $('.card');

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

  var element = $('.card');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('rollIn animated');

    // // animation ends
    // element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

    //  // execute the animation again
    //   $(e.target).removeClass('rollIn animated');

    // });

  });

  var element = $('.card');

  // when mouseover execute the animation
  element.mouseover(function () {

    // the animation starts
    element.toggleClass('rollOut animated');

    // // animation ends
    // element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

    //  // execute the animation again
    //   $(e.target).removeClass('rollOut animated');

    // });

  });
}
