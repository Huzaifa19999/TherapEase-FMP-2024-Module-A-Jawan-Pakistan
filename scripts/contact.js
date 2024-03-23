import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import {
  getDatabase,
  ref,
  push
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6isRXtPKVP_uWtM8ez2_3zEgGWnb54yc",
  authDomain: "therapease-fmp-cad85.firebaseapp.com",
  databaseURL: "https://therapease-fmp-cad85-default-rtdb.firebaseio.com",
  projectId: "therapease-fmp-cad85",
  storageBucket: "therapease-fmp-cad85.appspot.com",
  messagingSenderId: "1080211013115",
  appId: "1:1080211013115:web:48b2590d161b88730ddf5e"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

window.getData = function() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
  
    if (!fname || !lname ||!email ||!comment) {
      alert("Please fill in all fields");
      return;
    }
  
    const contactsRef = ref(db, 'contactData');
  
    push(contactsRef, {
      firstName: fname,
      lastName: lname,    
      email: email,
      comment: comment
    }).then(function() {
      alert("Thank you for your contact. We will respond as soon as possible");
      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("comment").value = "";
    }).catch(function(error) {
      console.error("Error adding data: ", error);
    });
  }
// document.getElementById("submitBtn").addEventListener("click", getData);

var mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



