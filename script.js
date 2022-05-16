/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// Login scripts
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This part of the script will check from local storage if the variables
//corresspond to the the stored storage
//checking/Login function
function login() {
  var storedName = localStorage.getItem('regMail');
  var storedPw = localStorage.getItem('regPasswordconfirm');
  var userName = document.getElementById('logEmail');
  var userPw = document.getElementById('logPassword');
  //var userRemember = document.getElementById("rememberMe");
  if (userName.value == storedName && userPw.value == storedPw) {
      alert('You are logged in, redirecting you to landing page');
      window.location.href = "./landing.html";
  } else {
      alert('Error on login');
      window.location.href ="./index.html";
  }
}
function registration() {
  /////////////////////Registration  Variables ///////////////////////////////////////////////////////////
  var firstname = document.getElementById("regFirstName").value;
  var email = document.getElementById("regMail").value;
  var pwd = document.getElementById("regPassword").value;
  var cpwd = document.getElementById("regPasswordconfirm").value;
  //console.log(firstname + ", " + email + ", " + pwd + ", " + cpwd);
  //conditions and parameters of the input data
  var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (firstname == '') {
      alert('Please enter your name')
  } else if (!letters.test(firstname)) {
      alert('Name field requiregitd only alphabet characters')
  } else if (email == '') {
      alert("Please enter your email")
  } else if (!filter.test(email)) {
      alert('Invalid email');
  } else if (pwd == '') {
      alert('Please enter Password');
  } else if (cpwd == '') {
      alert('Enter Confirm Password');
  } else if (!pwd_expression.test(pwd)) {
      alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
  } else if (pwd != cpwd) {
      alert('Password not Matched');
  } else if (document.getElementById("regPassword").value.length < 6) {
      alert('Password minimum length is 6');
  } else if (document.getElementById("regPassword").value.length > 12) {
      alert('Password max length is 12');
  } else {
      ////Store Information To Localstorage////
      //var firstname = document.getElementById("regFirstName").value;
      //var email = document.getElementById("regMail").value;
      //var pwd = document.getElementById("regPassword").value;
      //var cpwd = document.getElementById("regPasswordconfirm").value;
      localStorage.setItem('regMail', email);
      localStorage.setItem('regPasswordconfirm', cpwd);
      ////////redirect user to login form
      alert('Your account has been created , Redirecting you to Login Website');
      // Redirecting to other page or webste code.
      window.location.href = "./index.html";
  }
}