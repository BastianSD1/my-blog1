function addRoom (){
    room_name = document.getElementById ("room_name"). value;
firebase.database().ref("/").child(room_name).uptade({
    purpose : "ading room name" 
});
localStorage.setItem ("room_name","room_name")
window.location= "window_page.html";
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
    Room_names = childKey;
  <div></div>
    });});}
  getData();
}
function getData() {
firebase.database().ref("/").
document.getElementById("output")inner.HTML ="";
snapshot.forEach(fuction(childSnapshot) {
childkey =childSnapshot.key;
 
console.log("nombre de la sala :" + rooms_names);
row = "div class= 'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id) >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;

   });
});

fuction redirectToRoomName ()
{
console.log(name);
localStorage.setItem("room name",name);
window.location="kwiter_page.html";
}
function logout (){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location ="index.html";
}

  
  
  var firebaseConfig = {
    apiKey: "AIzaSyBTVZ1Hsop9Jt8k0mHEXegYSRWoZS3cQnE",
    authDomain: "igishka2-tssixm.firebaseapp.com",
    databaseURL: "https://newagent-fhepbr.firebaseio.com",
    projectId: "igishka2-tssixm",
    storageBucket: "igishka2-tssixm.appspot.com",
    messagingSenderId: "14896371054",
    appId: "1:14896371054:web:fc4e1d55b42d5a7f41dd7f"
  };