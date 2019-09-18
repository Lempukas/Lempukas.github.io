var aukstis = 5;
var plotis = 4;
var perimetras = (aukstis + plotis) * 2;
var plotas = aukstis * plotis;
var istrizaine = Math.sqrt(aukstis * aukstis + plotis * plotis);

console.log("Staciakampio krastines yra", aukstis, "ir", plotis);
console.log("Staciakampio perimetras yra", perimetras);
console.log("Staciakampio plotas yra", plotas);
console.log("Staciakampio istrizaine yra", istrizaine);

document.getElementById("duomenys").innerHTML =
  "Staciakampio krastines: " + plotis + " ir " + aukstis;
function skaiciuok() {
  document.getElementById("perimetras").innerHTML =
    "Staciakampio perimetras yra lygus " + perimetras;
  document.getElementById("plotas").innerHTML =
    "Staciakampio plotas yra lygus " + plotas;
  document.getElementById("istrizaine").innerHTML =
    "Staciakampio istrizaine yra lygi " + istrizaine;
}
