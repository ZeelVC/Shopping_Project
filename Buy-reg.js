function validate(){
  var fname = document.getElementById("Name_text").value;
  var uname = document.getElementById("User_text").value;
  var email = document.getElementById("Email_text").value;
  var mbn = document.getElementById("Mobile_text").value;
  var pt = document.getElementById("psw").value;
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  var cpt = document.getElementById("Confirm_Password_text").value;
  if(fname.length == 0){
    alert("Enter Your full Name First.");
    return false;
  }
  if(uname.length == 0){
    alert("Enter your username.");
    return false;
  }
  if(email.length == 0){
    alert("Please ! Provide your Email_ID First.")
    return false;
  }
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(String(email).toLowerCase())){
    return true
  }else{
    alert("Please ! Enter a valid Email_ID");
    document.hasFocus(email);
    return false;
  }
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
  if(cpt.length == 0){
    alert("First write Confirm Password Field.")
  }
  if(pt != cpt){
    if(cpt.length != 0){
      alert("Confirm Passwords must be same as the Password You Enter");
      return false;
    }
  }
}
/*function validate_email(){
  var name = document.getElementById("Name_text").value;
  if(name.length == 0){
    alert("First Enter your Full Name")
    return false
  }
  var user = document.getElementById("User_text").value;
  if(user.length == 0){
    alert("Please ! Enter your User_Name")
    return false;
  }
  let mail = document.getElementById("Email_text").value;
  if(mail.length == 0){
    alert("Please ! Provide your Email_ID First.")
    return false;
  }
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(String(mail).toLowerCase())){
    return true
  }else{
    alert("Please ! Enter a valid Email_ID")
    return false;
  }
}
function validate_mobile(){
  var name = document.getElementById("Name_text").value;
  if(name.length == 0){
    return false
  }
  var user = document.getElementById("User_text").value;
  if(user.length == 0){
    return false;
  }
  var mail = document.getElementById("Email_text").value;
  if(mail.length == 0){
    return false;
  }
  var mn = document.getElementById("Mobile_text").value;
  var re = /^\d{10}$/;
  if(mn.length != 0){
    if(re.test(mn)){
      return true
    } else {
      alert("Please ! Enter a valid Mobile_Number");
      return false
    }
  }
}
function validate_password(){
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
}
function validate_confirm_password(){
  var cpt = document.getElementById("Confirm_Password_text").value;
  var pt = document.getElementById("psw").value;
  if(cpt.length == 0){
    alert("First write Confirm Password Field.")
  }
  if(pt != cpt){
    if(cpt.length != 0){
      alert("Confirm Passwords must be same as the Password You Enter");
      return false;
    }
  }
}*/