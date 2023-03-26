var uid = new ShortUniqueId();
const addBtn = document.querySelector(".add-btn"); 
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".textarea-cont");
const mainCont = document.querySelector(".main-cont");
const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1];
// console.log(modalPriorityColor);

var isModalPresent = false; 
addBtn.addEventListener("click", function(){
     
    if(!isModalPresent) {
        // alert("Display Modal");
        modalCont.style.display = "flex";
    } 
    else {
        // alert("Display None");
        modalCont.style.display = "none";
        
    }

    isModalPresent = !isModalPresent;

});


modalCont.addEventListener("keydown", function(e) {
    // console.log(e);

    if(e.key == "Shift") {
        /* 1) createTicket 
           2) hide the model 
           3) update isModalPresent
        */
        //console.log(textArea.value);
        createTicket(modalPriorityColor, textArea.value, );

        modalCont.style.display = "none";
        isModalPresent = false;
        textArea.value = "";
    } 
});


function createTicket(ticketColor, data) {
    //generate uid
    let id = uid();

    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML=  ` 
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">${id}</div>
        <div class="task-area">${data}</div>
        <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
        </div>
    `;
    mainCont.appendChild(ticketCont);
}



// hovering on toolbox-color-cont