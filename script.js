let addbutton = document.querySelector(".add-btn");

let modalCont = document.querySelector(".model-cont");

let addFlag = false;

let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length - 1]; //black

let allPriorityColors = document.querySelectorAll(".priority-color");

let mainCont = document.querySelector(".main-cont");

let textAreaCont = document.querySelector(".textarea-cont");

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

//Change in priority colors

allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function (e) {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorElem.classList.add("active");

    modalPriorityColor = colorElem.classList[0];
  });
});

//generating a ticket
modalCont.addEventListener("keydown", function (e) {
  let key = e.key;

  if (key == "Shift") {
    createTicket(modalPriorityColor, textAreaCont.value); //this function will generate the ticket
    modalCont.style.display = "none";
    addFlag = false;
    textAreaCont.value = "";
  }
});

function createTicket(ticketColor, ticketValue) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
  <div class="ticket-id"></div>
  <div class="ticket-area">${ticketValue}</div>`;

  mainCont.appendChild(ticketCont);

  handleRemoval(ticketCont)
}

removeButton.addEventListener("click", function (e) {
  removeFlag = !removeButton;
});

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (removeFlag == true) {
      ticket.remove();
    }
  });
}
