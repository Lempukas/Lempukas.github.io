function ivestiDuomenis() {
  var input1 = $(".input1").val();
  var input2 = $(".input2").val();
  //konstruktorius
  function Masinos(carName, carSpeed) {
    this.carName = carName;
    this.carSpeed = carSpeed;
  }
  var masina = new Masinos(input1, input2);

  // console.log(
  //   "automobilis yra " +
  //     masina.carName +
  //     ",o automobilio greitis yra " +
  //     masina.carSpeed
  // );
  //isvedimas

  if (input1 == "" || input2 == "") {
    $(".error").html("<p style=color:red>" + "Neivedete duomenu!" + "</p>");
  } else {
    $(".error p").remove();
    $(".duomenys1").append(
      "<tr>" +
        "<td>" +
        masina.carName +
        "</td>" +
        " " +
        "<td class='greitis'>" +
        masina.carSpeed +
        "km/h" +
        "</td>" +
        "</tr>"
    );
    var input1 = $(".input1").val("");
    var input1 = $(".input2").val("");
  }
}
function atstumas() {
  var input2 = $(".input2").val();
  var greitis = $(".greitis").html();
  var greitis = parseInt(greitis);
  greitis1 = document.querySelector(".greitis").innerHTML;
  greitis1 = parseInt(greitis1);
  console.log(greitis1);
  // console.log(input2);
}
