
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBiGr4ZDAZnvczG_myOhcEcgKvP_V4mqlA",
      authDomain: "kwitter-b9d04.firebaseapp.com",
      databaseURL: "https://kwitter-b9d04-default-rtdb.firebaseio.com",
      projectId: "kwitter-b9d04",
      storageBucket: "kwitter-b9d04.appspot.com",
      messagingSenderId: "947728479287",
      appId: "1:947728479287:web:4b38a1afb71f00053cfbb2",
      measurementId: "G-755D0X9VSM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
     function addRoom() 
     {
          room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
            localStorage.setItem("room_name", room_name);
             window.location = "kwitter_page.html"; }
             function getData() { firebase.database().ref("/").on('value', function(snapshot)
              { document.getElementById("output").innerHTML = "";
               snapshot.forEach(function(childSnapshot)
                { childKey = childSnapshot.key; Room_names = childKey;
                   console.log("Room Name - " + Room_names);
                    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                     document.getElementById("output").innerHTML += row; }); }); }
                     getData();
                      function redirectToRoomName(name) { console.log(name);
                           localStorage.setItem("room_name", name);
                            window.location = "kwitter_page.html"; }
                             function logout()
                              {
                                   localStorage.removeItem("user_name");
                                    localStorage.removeItem("room_name");
                                     window.location = "kwitter.html"; }