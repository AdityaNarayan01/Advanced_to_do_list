let addbutton = document.querySelector(".add-btn");

let modalCont = document.querySelector(".model-cont");

let addFlag = false;

addbutton.addEventListener("click", function (e) {
  //display a model

  //addFlag jab true hoo --> model display
  //addFlag jab false hoo --> model hide

  addFlag = !addFlag;

  if (addFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});
