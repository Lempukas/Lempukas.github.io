$(document).ready(function() {
  //Kintamieji
  var automobilis = $("#automobilisInput");
  var numeris = $("#numerisInput");
  var greitis = $("#greitisInput");
  //
  var automobilis3 = $("#automobilisInput3");
  var numeris3 = $("#numerisInput3");
  var greitis3 = $("#greitisInput3");
  var i = 0;
  var duomenys = [];

  //IVESTI DUOMENIS I LENTELE
  $("#saugoti").on("click", function() {
    if (automobilis.val() == "" || numeris.val() == "" || greitis.val() == "") {
      $(".alert").html("Neivedete duomenu");
      return false;
    } else {
      function DuomenysAuto(automobilisName, numerisName, greitisName) {
        this.automobilisName = automobilisName;
        this.numerisName = numerisName;
        this.greitisName = greitisName;
      }
      duomenys.push(new DuomenysAuto(automobilis.val(), numeris.val(), greitis.val()));

      $("#lentelesDuomenys").append(
        "<tr>" +
          "<td>" +
          duomenys[i].automobilisName +
          "</td>" +
          "<td>" +
          duomenys[i].numerisName +
          "</td>" +
          "<td>" +
          duomenys[i].greitisName +
          "</td>" +
          "<td>" +
          "<input class=btn type=button id=istrinti value=Istrinti>" +
          "<button class=btn id=redaguoti>" +
          "redaguoti" +
          "</button>" +
          "</td>" +
          "</tr>"
      );
      // RESETINT DUOMENIS IS INPUTO
      automobilis.val("");
      numeris.val("");
      greitis.val("");
      i++;
      $(".alert").html(""); //resetina alerta
      console.log("i yra" + i);
    }
  });
  $("#atsaukti").on("click", function() {
    $(".alert").html(""); //resetina alerta
    automobilis.val("");
    numeris.val("");
    greitis.val("");
  });
  $("#dismissBtn").on("click", function() {
    $(".alert").html(""); //resetina alerta
    automobilis.val("");
    numeris.val("");
    greitis.val("");
  });

  // ISTRINA EILUTE
  $(document).on("click", "#istrinti", function() {
    indexas = $(this)
      .parent()
      .parent()
      .index();
    console.log("indexas yra " + indexas);
    $("#exampleModal2").modal("show");
  });
  $(document).on("click", "#deleteConfirmBtn", function() {
    $("#exampleModal2").modal("hide");
    duomenys.splice(indexas, 1);
    i--;
    $("#lentelesDuomenys tr").remove();
    $.each(duomenys, function(index, value) {
      var automobilisName = value.automobilisName;
      var numerisName = value.numerisName;
      var greitisName = value.greitisName;
      $("#lentelesDuomenys").append(
        "<tr>" +
          "<td>" +
          automobilisName +
          "</td>" +
          "<td>" +
          numerisName +
          "</td>" +
          "<td>" +
          greitisName +
          "</td>" +
          "<td>" +
          "<input class=btn btn-danger type=button id=istrinti value=Istrinti>" +
          "<button class=btn btn-primary id=redaguoti>" +
          "redaguoti" +
          "</button>" +
          "</td>" +
          "</tr>"
      );
    });
    console.log(duomenys);
  });

  // REDAGUOTI EILUTE
  $(document).on("click", "#redaguoti", function() {
    indexas = $(this)
      .parent()
      .parent()
      .index();
    // SUMESTI TOS EILUTES DUOMENIS IS ARRAY I NAUJO MODALO INPUTUS
    paimtiName = duomenys[indexas].automobilisName;
    paimtiNumeri = duomenys[indexas].numerisName;
    paimtiGreiti = duomenys[indexas].greitisName;
    $("#automobilisInput3").val(paimtiName);
    $("#numerisInput3").val(paimtiNumeri);
    $("#greitisInput3").val(paimtiGreiti);

    $("#exampleModal3").modal("show");
    // delete duomenys[indexas]; //DELETINA ARRAY ITEMA,BET PALIEKA EMPTY SPOTA IR KITU ELEMENTU INDEXAS NESIKEICIA
    console.log(duomenys);
  });

  // ISSAUGOTI NAUJUS DUOMENIS I ARRAY
  $(document).on("click", "#saugoti3", function() {
    duomenys.splice(indexas, 1); //DELETINA ITEMA IR KITU ARRAY ELEMENTU INDEXAS KEICIASI!!!
    if (automobilis3.val() == "" || numeris3.val() == "" || greitis3.val() == "") {
      $(".alert3").html("Neivedete duomenu");
      return false;
    } else {
      function DuomenysAuto(automobilisName, numerisName, greitisName) {
        this.automobilisName = automobilisName;
        this.numerisName = numerisName;
        this.greitisName = greitisName;
      }
      var atspausdinti = new DuomenysAuto(automobilis3.val(), numeris3.val(), greitis3.val());
      duomenys.splice(indexas, 0, atspausdinti);
    }
    // BELIEKA PRASUKT ARRAY IR SUMEST I LENTELE PER NAUJA SU EACH();
    $("#lentelesDuomenys tr").remove();
    $.each(duomenys, function(index, value) {
      var automobilisName = value.automobilisName;
      var numerisName = value.numerisName;
      var greitisName = value.greitisName;
      $("#lentelesDuomenys").append(
        "<tr>" +
          "<td>" +
          automobilisName +
          "</td>" +
          "<td>" +
          numerisName +
          "</td>" +
          "<td>" +
          greitisName +
          "</td>" +
          "<td>" +
          "<input class=btn btn-danger type=button id=istrinti value=Istrinti>" +
          "<button class=btn btn-primary id=redaguoti>" +
          "redaguoti" +
          "</button>" +
          "</td>" +
          "</tr>"
      );
    });

    // RESETINT DUOMENIS IS INPUTO
    automobilis3.val("");
    numeris3.val("");
    greitis3.val("");
    $(".alert").html(""); //resetina alerta
    console.log(duomenys);
  });
});
