// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCOHldHNz4lIgRQ2Rn_kGlHFAs8S2T4r5c",
    authDomain: "e-library-website.firebaseapp.com",
    databaseURL: "https://e-library-website.firebaseio.com",
    projectId: "e-library-website",
    storageBucket: "e-library-website.appspot.com",
    messagingSenderId: "1042701291539"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("UserLoggedIn").style.display="initial";
    document.getElementById("UserLoggingIn").style.display="none";
    document.getElementById("CreateAccount").style.display="none";
    document.getElementById("title").innerHTML="Welcome User";//needs improvement
    //window.alert("Logged in");
  } else {
    document.getElementById("UserLoggedIn").style.display="none";
    document.getElementById("UserLoggingIn").style.display="initial";
    document.getElementById("CreateAccount").style.display="none";
    document.getElementById("title").innerHTML="Student Login Page";
    //window.alert("Not logged in");
  }
});

  function Login()
  {
    var username = document.getElementById("Input_Username").value;
    var password = document.getElementById("Input_Password").value;
    firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
  var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
});
  }

function Logout()
  {
    firebase.auth().signOut().then(function() {
  document.getElementById("UserLoggedIn").style.display="none";
  document.getElementById("UserLoggingIn").style.display="initial";
}).catch(function(error) {
  window.alert("An unexpected error occured");
  document.getElementById("UserLoggedIn").style.display="initial";
  document.getElementById("UserLoggingIn").style.display="none";
});
}

function createAccount()
{
  var username = document.getElementById("Input_Username_create").value;
  var password = document.getElementById("Input_Password_create").value;
  var name = document.getElementById("Name_new_user");
  var card_no = document.getElementById("Card_new_user");
  firebase.auth().createUserWithEmailAndPassword(username, password).then(Update_user_information()).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("An unexpected error occured" + errorMessage);
});
}
//changes have been done
function createAccountPage()
{
  document.getElementById("UserLoggedIn").style.display="none";
  document.getElementById("UserLoggingIn").style.display="none";
  document.getElementById("CreateAccount").style.display="block";
}
function Update_user_information(name, photoURL)
{
  var user = firebase.auth().currentUser;
  user.updateProfile({
  displayName: name,
  photoURL: card_no
  }).then(function() {
  window.alert("User information updated successfully");
  }).catch(function(error) {
  window.alert("Unexpected error occured");
  });
}

