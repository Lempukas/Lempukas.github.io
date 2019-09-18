// A $( document ).ready() block.
$(document).ready(function() {
  $(".link").hover(
    function() {
      $(".para").animate({ opacity: 0 });
    },
    function() {
      $(".para").animate({ opacity: 1 });
    }
  );

  $(".apskritimas1").on("click", function() {
    $(this).siblings().fadeOut(2000);  
  });
  $(".apskritimas1").on("dblclick", function() {
    $(this).siblings().fadeIn(2000);  
  });

});