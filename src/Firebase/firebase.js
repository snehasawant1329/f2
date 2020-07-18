
import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyC3Swi4vBkagjKgFaORiEMvrLBmFl98T-c",
  authDomain: "financialportfolio-26057.firebaseapp.com",
  databaseURL: "https://financialportfolio-26057.firebaseio.com",
  projectId: "financialportfolio-26057",
  storageBucket: "financialportfolio-26057.appspot.com",
  messagingSenderId: "272890287980",
  appId: "1:272890287980:web:de00877e45a18c64410549",
  measurementId: "G-TE85LGXDKS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
export default firebase;