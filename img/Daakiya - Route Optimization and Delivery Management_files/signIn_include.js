

var firebaseConfig = module_firebaseConfig;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var userDetails ;

//Check whether user is already signed in?
firebase.auth().onAuthStateChanged(function(user) {
  console.log(user)
  if (user) {
    userDetails = user;

    // User is signed in. navigate to orders list view
   // window.location.href = "/order_list_view.html";
    console.log("User Logged In", user.email);
    console.log("window.location.href "+ window.location.href)
  } else {
    window.location.href = "/";
    // No user is signed in. stay on the same page
    console.log("User Not Logged In");
  }
});

function logOut () {
  console.log("User Signed out");
  firebase.auth().signOut()
}


