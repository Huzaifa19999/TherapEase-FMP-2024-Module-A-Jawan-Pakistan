  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getDatabase, push ,ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
  import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD6isRXtPKVP_uWtM8ez2_3zEgGWnb54yc",
    authDomain: "therapease-fmp-cad85.firebaseapp.com",
    databaseURL: "https://therapease-fmp-cad85-default-rtdb.firebaseio.com",
    projectId: "therapease-fmp-cad85",
    storageBucket: "therapease-fmp-cad85.appspot.com",
    messagingSenderId: "1080211013115",
    appId: "1:1080211013115:web:48b2590d161b88730ddf5e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();
  const auth = getAuth();

var model = {}
var email = document.getElementById("email")
var password = document.getElementById("password")


window.logIn = function(e) {
    e.preventDefault();
    model.email = email.value;
    model.password = password.value;
    console.log(model);

    signInWithEmailAndPassword(auth, model.email, model.password)
        .then(function(res) {
            console.log(res.user.uid, "Success Response");
            model.id = res.user.uid;
            var reference = ref(database, `user/${model.id}`);
            onValue(reference, function(user) {
                console.log(user.val());
            });
                // email.value = "";
                // password.value = "";
                alert("Admin login Successfully");
                window.location.href = "./adminPanel.html";

            })
        .catch(function(err) {
            console.log(err, "Error Response");
            alert(err.message);
        });
};
