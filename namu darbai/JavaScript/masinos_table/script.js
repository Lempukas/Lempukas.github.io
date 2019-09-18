//masyvas
var automobilis = [
  ["2017-07-06 19:59:45", "LRS123", 5000, 118],
  ["2017-07-05 9:59:21", "AAA133", 5000, 200],
  ["2016-09-08 13:29:32", "BBB954", 5000, 95]
];
//auto greitis
for (var a = 0; a < automobilis.length; a++) {
  var laikas = automobilis[a][3];
  var atstumas = automobilis[a][2];
  var greitis = (atstumas / laikas) * 3.6;
  var greitis = Math.round(greitis);
  automobilis[a].push(`${greitis} km/h`);
}

//lenteles sudarymas
var lentele = document.getElementById("lentele");
for (var i = 0; i < automobilis.length; i++) {
  var row = lentele.insertRow();
  for (var j = 0; j < automobilis[0].length; j++) {
    var cell = row.insertCell(j);
    cell.innerHTML = automobilis[i][j];
  }
}
//funkcija ivedimui
function ivedimas() {
  dataIvesti = document.getElementById("data").value;
  numerisIvesti = document.getElementById("numeris").value;
  atstumasIvesti = document.getElementById("atstumas").value;
  laikasIvesti = document.getElementById("laikas").value;
  naujasAutomobilis = [];
  naujasAutomobilis.push(dataIvesti);
  naujasAutomobilis.push(numerisIvesti);
  atstumasIvesti1 = parseInt(atstumasIvesti);
  laikasIvesti1 = parseInt(laikasIvesti);
  naujasAutomobilis.push(atstumasIvesti1);
  naujasAutomobilis.push(laikasIvesti1);
  automobilis.push(naujasAutomobilis);
  document.getElementById("data").value = "";
  document.getElementById("numeris").value = "";
  document.getElementById("atstumas").value = "";
  document.getElementById("laikas").value = "";

  var row = lentele.insertRow();
  for (j = 0; j < automobilis[0].length; j++) {
    var cell = row.insertCell(j);
    cell.innerHTML = automobilis[i][j];
    console.log(i);
  }
  console.log(automobilis);
}

for (var k = 1; k <= automobilis.length; k++) {
  var lentele2 = document.getElementById("lentele").rows[k].cells.item(4)
    .innerHTML;
  var greitis1 = parseInt(lentele2);
  if (greitis1 > 90) {
    document.getElementById("lentele").rows[k].style.backgroundColor = "red";
  }
}
