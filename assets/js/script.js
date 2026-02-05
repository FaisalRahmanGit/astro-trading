$(document).ready(function () {
  AOS.init();
  // Navbar
  $(".navbar-toggler").click(function () {
    if ($(".navbar-collapse").hasClass("show")) {
      $(this).html("&#9776;");
    } else {
      $(this).html("&times;");
    }
  });
  //
});
