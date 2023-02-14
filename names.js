// This is my own script including comments and functions

window.onload = function details(){
    // collecting information from the contact.html form
    var email = localStorage.getItem("email")
    var first = localStorage.getItem("first")
    var last = localStorage.getItem("last")
    var mobile = localStorage.getItem("mobile")
    var message = localStorage.getItem("message")

    // setting collected information to readable vairables
    var user_emailaddress = "Email address: " + email;
    var user_firstname = "First Name: " + first;
    var user_lastname = "Last Name: " + last;
    var user_mobilenumber = "Mobile Number: " + mobile;
    var user_message = "Message: " + message;


    // replacing temporary text with correct variables
    var content_holder = document.getElementById('user_email');
    content_holder.innerHTML = user_emailaddress;
    
    var content_holder = document.getElementById('user_first');
    content_holder.innerHTML = user_firstname;

    var content_holder = document.getElementById('user_last');
    content_holder.innerHTML = user_lastname;

    var content_holder = document.getElementById('user_mobile');
    content_holder.innerHTML = user_mobilenumber;

    var content_holder = document.getElementById('user_message');
    content_holder.innerHTML = user_message;
}
