var figuros = [
  { ilgis: 2, plotis: 5, aukstis: 9 },
  { ilgis: 3, plotis: 2, aukstis: 6 },
  { ilgis: 1, plotis: 5, aukstis: 5 }
];
var turiai = [];

function isvesti() {
  var lentele1 = document.querySelector("table tbody");
  for (var i = 0; i < figuros.length; i++) {
    var ilgis = figuros[i].ilgis;
    var ilgisTd = "<td>" + ilgis + "</td>";
    var plotis = figuros[i].plotis;
    var plotisTd = "<td>" + plotis + "</td>";
    var aukstis = figuros[i].aukstis;
    var aukstisTd = "<td>" + aukstis + "</td>";

    lentele1.innerHTML += "<tr>" + ilgisTd + plotisTd + aukstisTd + "</tr>";
  }
}

function suskaiciuoti() {
  for (var i = 0; i < figuros.length; i++) {
    var turis = figuros[i].ilgis * figuros[i].plotis * figuros[i].aukstis;
    turiai.push(turis);
    var turiaiTd = "<td>" + turiai[i] + "</td>";
    lentele3.innerHTML += "<tr>" + turiaiTd + "</tr>";
  }

  //Surasti max value ir nuspalvinti
  var maxValue = Math.max.apply(Math, turiai);
  if (turiai[0] == maxValue) {
    var turis1 = document.getElementById("lentele3").getElementsByTagName("td");
    turis1[0].style.color = "red";
  } else if (turiai[1] == maxValue) {
    var turis2 = document.getElementById("lentele3").getElementsByTagName("td");
    turis2[1].style.color = "red";
  } else {
    var turis3 = document.getElementById("lentele3").getElementsByTagName("td");
    turis3[2].style.color = "red";
  }
}
