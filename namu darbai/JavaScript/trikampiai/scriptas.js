var x = 7;
var y = 6;
var z = 6;

//ar krastiniu suma nera mazesne uz ilgesne krastine?
var ilgaKrastine1 = x + y;
var ilgaKrastine2 = x + z;
var ilgaKrastine3 = y + z;
//
var d1 = Math.sqrt(x * x + y * y); //staciakampio trikampio ilgoji krastine
var d2 = Math.sqrt(x * x + z * z); //staciakampio trikampio ilgoji krastine
var d3 = Math.sqrt(z * z + y * y); //staciakampio trikampio ilgoji krastine

var p = (x + y + z) / 2; //trikampio perimetras
var S = Math.sqrt(p * ((p - x) * (p - y) * (p - z))); //trikampio plotas

function triangle() {
  if (z >= ilgaKrastine1 || y >= ilgaKrastine2 || x >= ilgaKrastine3) {
    document.getElementById("trikampis").innerHTML =
      "Toks trikampis neegzistuoja!";
    console.log("trikampis neegzistuoja");
  } else if (x == y && x == z) {
    document.getElementById("trikampis").innerHTML =
      "trikampis yra lygiakrastis";
    document.getElementById("plotas").innerHTML = "Jo plotas yra " + S;
    console.log("trikampis lygiakrastis");
    console.log(S);
  } else if ((x == z && x != y) || (x == y && x != z) || (z == y && z != x)) {
    document.getElementById("trikampis").innerHTML = "trikampis yra lygiasonis";
    document.getElementById("plotas").innerHTML = "Jo plotas yra " + S;
    console.log("trikampis lygiasonis");
    console.log(S);
  } else if (z == d1 || y == d2 || x == d3) {
    document.getElementById("trikampis").innerHTML =
      "trikampis yra staciakampis";
    document.getElementById("plotas").innerHTML = "Jo plotas yra " + S;
    console.log("trikampis staciakampis");
    console.log(S);
  } else {
    document.getElementById("trikampis").innerHTML =
      "trikampis yra ivairiakrastis";
    document.getElementById("plotas").innerHTML = "Jo plotas yra " + S;
    console.log("trikampis ivairiakrastis");
    console.log(S);
  }
}
