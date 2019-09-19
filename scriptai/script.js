$(document).ready(function() {
  //nerodyti menu
  $(".apie2").hide();
  $(".portfolio2").hide();
  $(".kontaktai2").hide();
  $(".ikvepimui2").hide();
  $(".apie1").animate({ opacity: 0 }, 1);
  $(".portfolio1").animate({ opacity: 0 }, 1);
  $(".kontaktai1").animate({ opacity: 0 }, 1);
  $(".ikvepimui1").animate({ opacity: 0 }, 1);
  $("#logo").hide();

  // $(".logo").animate({ opacity: 0 }, 1);
  //curved menu text
  $("#apie").arctext({ radius: 70, dir: 1 });
  $("#kontaktai").arctext({ radius: 70, dir: -1 });
  $("#portfolio").arctext({ radius: 70, dir: 1 });
  $("#ikvepimui").arctext({ radius: 70, dir: -1 });
  // LOGO ATSIRANDA
  $("#logo").fadeIn(500);
  //menu on hover atsiranda
  $(".menu").hover(
    function(e) {
      $(".apie2").show();
      $(".portfolio2").show();
      $(".kontaktai").show();
      $(".ikvepimui2").show();
      $(".apie1").hoverFlow(e.type, { left: -20, top: -20, opacity: 1 }, 400, "swing");
      $(".portfolio1").hoverFlow(e.type, { left: 20, top: -20, opacity: 1 }, 400, "swing");
      $(".kontaktai1").hoverFlow(e.type, { left: -20, top: 20, opacity: 1 }, 400, "swing");
      $(".ikvepimui1").hoverFlow(e.type, { left: 20, top: 20, opacity: 1 }, 400, "swing");
      $("#logo").animate({ opacity: 0 });
    },
    function(e) {
      $(".apie1").hoverFlow(e.type, { left: 0, top: 0, opacity: 0 }, 400, "swing");
      $(".portfolio1").hoverFlow(e.type, { left: 0, top: 0, opacity: 0 }, 400, "swing");
      $(".kontaktai1").hoverFlow(e.type, { left: 0, top: 0, opacity: 0 }, 400, "swing");
      $(".ikvepimui1").hoverFlow(e.type, { left: 0, top: 0, opacity: 0 }, 400, "swing");
      $("#logo")
        .delay(100)
        .animate({ opacity: 1 }, 400, "swing");
    }
  );
});
