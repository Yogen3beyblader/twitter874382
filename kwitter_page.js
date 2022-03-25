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
    user_name = localStorage.getItem ("user_name");
    room_name = localStorage.getItem ("room_name");
    function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
           });
           document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").InnerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//End code
      } });  }); }
getData();
