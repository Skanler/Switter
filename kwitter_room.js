
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
    document.getElementById("user_name").innerHTML = "Welcome, " + user_name;
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          localStorage.setItem("room_name",room_name);
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
                
          });
          window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}