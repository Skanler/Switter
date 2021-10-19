var firebaseConfig = {
      apiKey: "AIzaSyBbbjBeQ2I9fOpO4xn-9uEt8ys-kZ6-oK4",
      authDomain: "kwitter-8678a.firebaseapp.com",
      databaseURL: "https://kwitter-8678a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8678a",
      storageBucket: "kwitter-8678a.appspot.com",
      messagingSenderId: "955341470945",
      appId: "1:955341470945:web:9695fd6174508f3643cba0"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function logout(){
      localStorage.removeItem = ("user_name");
      localStorage.removeItem = ("room_name");
      window.location = "index.html";
}

