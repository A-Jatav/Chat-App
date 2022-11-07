// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2UsNFRKkYbbaf8eoCZiogajfBYf_nRX4",
    authDomain: "chat-app-a8f5b.firebaseapp.com",
    databaseURL: "https://chat-app-a8f5b-default-rtdb.firebaseio.com",
    projectId: "chat-app-a8f5b",
    storageBucket: "chat-app-a8f5b.appspot.com",
    messagingSenderId: "36525248009",
    appId: "1:36525248009:web:50a2116cc8debe5a09b2d8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var userna = localStorage.getItem("namex");
document.getElementById("welcome_h1").innerHTML = "Welcome "+userna+"!";

function addRoomFunc(){
    var rmname = document.getElementById("room_name").value;
    localStorage.setItem("roomnamex1", rmname);
    firebase.database().ref("/").child(rmname).update({
        purpose: "Adding Room"
    });
    document.getElementById("room_name").value = "";
};

function getdata(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
                childKey = childSnapshot.key;
                var roomunderscorenames = childKey;
                console.log("roomnames:"+roomunderscorenames);
                var row = "<div class='rmnms' id="+roomunderscorenames+" onclick='rtrn(this.id)'>"+roomunderscorenames+"</div><hr>";
                document.getElementById("output").innerHTML += row;
            })
        });
};
getdata();

function rtrn(firebsedbrmnms){
    localStorage.setItem("roomnamex1", firebsedbrmnms)

    window.location = "chat_page.html";
};

function loginout(){
    localStorage.removeItem("namex");
    localStorage.removeItem("roomnamex1");
    window.location = "index.html";
};