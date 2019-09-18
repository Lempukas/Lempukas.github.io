// var draginti = document.querySelector(".draginti");
// var dropinti = document.querySelectorAll(".dropinti");

// draginti.addEventListener("dragstart", dragStart);
// draginti.addEventListener("dragend", dragEnd);
var id;
var parentId;
// var img = document.querySelectorAll("div").childNodes;???
// target childElement????

function dragStart(e) {
  id = e.target.id;
  parentId = e.target.parentElement.id;
  e.dataTransfer.setData("text", id);
}
function allowDrop(e) {
  var checkas = document.getElementById(e.target.id);
  checkasIlgis = checkas.childNodes.length;
  if (e.target.id == id || e.target.id == parentId || checkasIlgis > 0) {
    return;
  }
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  var element = document.getElementById(id);
  e.target.appendChild(element);
  var parentElement = document.getElementById(parentId);
  parentElement.innerHTML = "";
}
