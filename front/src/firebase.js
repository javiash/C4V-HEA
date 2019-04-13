import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyA1i4gL1RU9cl7C4890y6XSLwYNmjWS5GA",
    authDomain: "c4veze.firebaseapp.com",
    databaseURL: "https://c4veze.firebaseio.com",
    projectId: "c4veze",
    storageBucket: "c4veze.appspot.com",
    messagingSenderId: "56108444503"
};
firebase.initializeApp(config);


firebase.firestore()

export default firebase;
