//
// importScripts('/__/firebase/6.1.1/firebase-app.js');
// importScripts('/__/firebase/6.1.1/firebase-messaging.js');
// importScripts('/__/firebase/init.js');
//
// firebase.messaging();

importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-messaging.js")
//importScripts("./accessKeys.js")

var module_firebaseConfig = {
  apiKey: "AIzaSyBFE7JabWokLVa3MxZ-lvon0_-Eu-l4eHQ",
  authDomain: "a-positronium.firebaseapp.com",
  databaseURL: "https://a-positronium.firebaseio.com",
  projectId: "a-positronium",
  storageBucket: "a-positronium.appspot.com",
  messagingSenderId: "284632398484",
  appId: "1:284632398484:web:e3528a21d6e70c94"
};
firebase.initializeApp (module_firebaseConfig)

const messaging = firebase.messaging()
