
//ADD YOUR FIREBASE LINKS HERE

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
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding user"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Names -",Room_names);

      row="<div class='room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}

