// Code taken from https://www.w3schools.com/howto/howto_css_modals.asp
// all comments and explinations are my own (I do understand the code)

//collecting the variables from the page once the script has been called for 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

//Showing the pop-up once the button has been pressed
btn.onclick = function() {
  modal.style.display = "block";
}

//hiding the pop-up when the exit cross has been clicked
span.onclick = function() {
  modal.style.display = "none";
}

//hiding the pop-up when the user clicks outside the pop-up, allowing for it to feel a lot better when using the site
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
