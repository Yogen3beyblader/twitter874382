const firebaseConfig = {
      apiKey: "AIzaSyBlKFy8LwOY85QwCoAypMJmtTTSt2kCBzY",
      authDomain: "kwitter-99364.firebaseapp.com",
      databaseURL: "https://kwitter-99364-default-rtdb.firebaseio.com",
      projectId: "kwitter-99364",
      storageBucket: "kwitter-99364.appspot.com",
      messagingSenderId: "68509975667",
      appId: "1:68509975667:web:00937746c637e1f2f69606"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
