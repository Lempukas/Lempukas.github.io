var automobilis = ["2017-07-06 19:59:45", "LRS123", 5000, 118];
var laikasS = automobilis[3];
var laikasH = laikasS / 3600;
var atstumas = automobilis[2];
var atstumasKm = atstumas / 1000;
var greitis = atstumasKm / laikasH;
var greitis = Math.round(greitis);

console.log(laikasS);
console.log(laikasH);
console.log(greitis);
document.getElementById(
  "greitis"
).innerHTML = `Automobilio greitis yra ${greitis} km/h.`;
