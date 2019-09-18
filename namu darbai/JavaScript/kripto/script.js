$(document).ready(function() {
  $.get("https://api.coinlore.com/api/tickers/", function(resp) {
    $(".btnClick").click(function() {
      var names = resp.data;
      console.log(names);
      $.each(names, function(index, value) {
        var pavadinimas = value.name;
        var simbolis = value.symbol;
        var kaina = value.price_usd;
        var kiekis = value.csupply;
        var kainaEur = (kaina * 0.905182168).toFixed(2);
        $(".data").append(
          "<tr>" +
            "<td>" +
            pavadinimas +
            "</td>" +
            "<td>" +
            simbolis +
            "</td>" +
            "<td>" +
            kiekis +
            "</td>" +
            "<td>" +
            kaina +
            "</td>" +
            "<td>" +
            kainaEur +
            "</td>" +
            "</tr>"
        );
        console.log(index);
      });
    });
  });
});
