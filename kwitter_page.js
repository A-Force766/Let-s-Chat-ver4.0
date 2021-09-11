var firebaseConfig = {
      apiKey: "AIzaSyAT6YSbEV6mUKa_eS0lEM3f1ET7bmiHTr4",
      authDomain: "let-s-chat-884f1.firebaseapp.com",
      databaseURL: "https://let-s-chat-884f1-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-884f1",
      storageBucket: "let-s-chat-884f1.appspot.com",
      messagingSenderId: "376396239348",
      appId: "1:376396239348:web:b9573a88fa47ebf9d1a9a1"
    };
    
    
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0});
document.getElementById("msg").value="";
}
function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;

      } });  }); }
getData();
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html")
}