import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBKomyPIaAMPF1iYfzE2gOwmK7KOuo9R7o",
    authDomain: "cafeapp-a96a0.firebaseapp.com",
    projectId: "cafeapp-a96a0",
    storageBucket: "cafeapp-a96a0.appspot.com",
    messagingSenderId: "188511770835",
    appId: "1:188511770835:web:8a0210c986930cd6315c26",
    measurementId: "G-VSMVRMEEN9"
  };

export const storage = firebase.storage();
export default firebase;