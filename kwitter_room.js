function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   var firebaseConfig = {
    apiKey: "AIzaSyBbFI-yDDPzRB4gGnmLMw-FgKTG7m3iHtE",
    authDomain: "c-93-94-95-96-hw.firebaseapp.com",
    projectId: "c-93-94-95-96-hw",
    storageBucket: "c-93-94-95-96-hw.appspot.com",
    messagingSenderId: "471267912775",
    appId: "1:471267912775:web:d8623d3cfad6189d76d562"
  };
   //End code
   });});}
getData();