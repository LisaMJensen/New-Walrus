$(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

    $("#start").click(function() {
    //  $(".paraborder").fadeToggle();
      $("#start").toggleClass("orange");
      $("orange").fadeToggle();
    });

    $("#orange").click(function() {

    });

    $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");
    });

    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
    });

    $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");
    });


});
