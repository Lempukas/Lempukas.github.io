$(document).ready(function() {
  var plotis;
  var ilgis;
  var spalvaOption;

  $("#spalva").on('change',function() {
    spalvaOption = $("#spalva").val();
  });

  //SUKURTI BLOKELI
  $(".sukurti").on("click", function() {
    ilgis = $("#ilgis").val();
    plotis = $("#plotis").val();
    $("<div/ class=blokelis>").css({'width': ilgis, 'height': plotis, "background-color": spalvaOption}).appendTo(".blokas");
    $("#plotis").val("");
    $("#ilgis").val("");
  });

  //PANAIKINTI BLOKELI
  $(".blokas").on('click', '.blokelis', function() {
    $(this).remove();
  });
});
