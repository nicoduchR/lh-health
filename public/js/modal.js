// Get the modal
var modal = document.getElementById("#modalCart");

// Get the button that opens the modal
// var btn = document.getElementById("modal-btn");
var buttons = document.getElementsByClassName("modal-btn");
console.log(buttons[0]);

// When the user clicks on the button, open the modal
function btnOnClick(button){
    let serialNumber = button.dataset.serialnumber;
    let values = document.querySelectorAll(`[data-serialNumber-tr='${serialNumber}']`);
    values.forEach(element => {
        element.removeAttribute("hidden"); 
    });
}


function clearModal(){
    let values = document.querySelectorAll(`[data-serialNumber-tr]`);
    values.forEach(element => {
        element.setAttribute("hidden", true);
    });
}


$(document).ready(function() {
    $("#just_load_please").on("click", function(e) {
      $("#loadMe").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
      });
      setTimeout(function() {
        $("#loadMe").modal("hide");
      }, 1500000);
    });

    $("#just_sell_please").on("click", function(e) {
        $("#sellMe").modal({
          backdrop: "static", //remove ability to close modal with click
          keyboard: false, //remove option to close with keyboard
          show: true //Display loader!
        });
        setTimeout(function() {
          $("#sellMe").modal("hide");
        }, 1500000);
      });
  });
  