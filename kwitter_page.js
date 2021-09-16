//YOUR FIREBASE LINKS

const firebaseConfig = {
  apiKey: "AIzaSyC5adDzL6K6RAiXKHNtG-Wz5ZKNrcMRnVo",
  authDomain: "kwitter-105f6.firebaseapp.com",
  databaseURL: "https://kwitter-105f6-default-rtdb.firebaseio.com",
  projectId: "kwitter-105f6",
  storageBucket: "kwitter-105f6.appspot.com",
  messagingSenderId: "1090048969558",
  appId: "1:1090048969558:web:7802360035440778b164f7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
  msg= document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
}

