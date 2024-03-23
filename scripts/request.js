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

window.submitForm = function() {
  var fullName = document.getElementById("name").value;
  var fatherName = document.getElementById("fname").value;
  var city = document.getElementById("city").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;
  var address = document.getElementById("address").value;


  if (!fullName || !fatherName || !city || !email || !phone || !dob || !gender || !address) {
    alert("Please fill in all fields before submitting the form.");
    return;
  }

  push(ref(db, 'appointments'), { 
    fullName: fullName,
    fatherName: fatherName,
    city: city,
    email: email,
    phone: phone,
    dob: dob,
    gender: gender,
    address: address
  });

  document.getElementById("name").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("city").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";

  alert("Appointment requested successfully!");
}
