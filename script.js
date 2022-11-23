// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmNwS7n4k0DJj--DIFbVGKHWerwiqX-jA",
    authDomain: "byc-e5851.firebaseapp.com",
    databaseURL: "https://byc-e5851-default-rtdb.firebaseio.com",
    projectId: "byc-e5851",
    storageBucket: "byc-e5851.appspot.com",
    messagingSenderId: "389628062060",
    appId: "1:389628062060:web:be8947356cc952720feb49",
    measurementId: "G-VLP6GG8RM0"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

function register(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var full_name = document.getElementById('full_name').value;
    var category = document.getElementById('category').value;
    var address = document.getElementById('address').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
        var user = auth.currentUser;

        var database_ref = database.ref();

        var user_data = {
            email: email,
            full_name : full_name,
            category : category,
            address : address,
            last_login : Date.now()
        };
        database_ref.child("Users/"+user.uid).set(user_data);
        alert("You are all set, now you can sign in using your details.")
        openForm();
    })
    .catch(function(error){
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message, error_code);
        openForm();
    })
}

var counter = 0;
var counter2 = 0;


function openForm() {
    if (counter == 0){
        document.getElementById("card-content").style.display = "block";
        document.getElementById("card-content2").style.display = "none";
        counter++;
        
    }
    else{
        counter--;
        document.getElementById("card-content").style.display = "none";
        
    }
  };

  
  function openForm2() {
      if (counter2 == 0){
          document.getElementById("card-content2").style.display = "block";
          document.getElementById("card-content").style.display = "none";
          counter2++;
          
      }
      else{
          counter2--;
          document.getElementById("card-content2").style.display = "none";
          
      }
    };

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
  
