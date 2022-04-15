let addbutton = document.querySelector(".add-btn");

let modalCont = document.querySelector(".model-cont");

let addFlag = false;

let removeBtn = document.querySelector(".remove-btn");
let removeFlag = false;

let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length - 1]; //black

let allPriorityColors = document.querySelectorAll(".priority-color");

let mainCont = document.querySelector(".main-cont");

let textAreaCont = document.querySelector(".textarea-cont");

let lockClass = "fa-lock";
let unclockClass = "fa-lock-open";

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

/************************************************ Change in priority colors ***********************************************/

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

/*********************************************** creates ticket  ***********************************************/

function createTicket(ticketColor, ticketValue) {
   let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `   <div class="ticket-color ${ticketColor}"></div>
  <div class="ticket-id">Sample id</div>
  <div class="task-area">${ticketValue}</div>
  <div class="ticket-lock">
      <i class="fa-solid fa-lock"></i>
  </div>`;

  mainCont.appendChild(ticketCont);

  handleRemoval(ticketCont);

  handleLock(ticketCont);
}

removeBtn.addEventListener("click", function () {
  removeFlag = !removeFlag;
  if (removeFlag == true) {
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

//remove tickets
function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (removeFlag == true) {
      ticket.remove();
    }
  });
}

//************************************************Lock and unclock tickets/***********************************************
function handleLock(ticket) {
  let ticketLockElem = document.querySelector(".ticket-lock");

  let ticketLock = ticketLockElem.children[0];

  let ticketTaskArea = ticket.querySelector(".task-area")

  ticketLock.addEventListener("click", function (e) {
    if (ticketLock.classList.contains(lockClass)) {
      ticketLock.classList.remove(lockClass);
      ticketLock.classList.add(unclockClass);
      ticketTaskArea.setAttribute('contenteditable' , 'true');


    } else {
      ticketLock.classList.remove(unclockClass);
      ticketLock.classList.add(lockClass);
      ticketTaskArea.setAttribute('contenteditable' , 'false');
    }
  });
}
