function gautiPassword(e) {
  var password1 = document.forms["forma1"]["pass1"].value;
  var password2 = document.forms["forma1"]["pass2"].value;

  var password1Lenght = password1.length;
  console.log(password1Lenght);
  if (password1Lenght < 5) {
    e.preventDefault();
    document.getElementById("alert").innerHTML =
      "<span style='color:red'>" + "Slaptazodis per trumpas!!!" + "</span>";
  } else {
    if (password1 == "" || password2 == "") {
      e.preventDefault();
      document.getElementById("alert").innerHTML =
        "<span style='color:red'>" + "Iveskite Slaptazodi!" + "</span>";
    } else if (password1 != password2) {
      e.preventDefault();
      document.getElementById("alert").innerHTML =
        "<span style='color:red'>" + "Slaptazodziai nesutampa!" + "</span>";
    } else {
      e.preventDefault();
      document.getElementById("alert").innerHTML = "Slaptazodis keiciamas...";
      document.getElementById("loader").innerHTML =
        '<svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>';
      document.getElementById("forma1").reset();
    }

    console.log(password1);
    console.log(password2);
  }
}
