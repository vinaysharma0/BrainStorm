import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCLBADu9cEc3HCQPP3WpKTHdpsSGP7a9UI",
    authDomain: "brainstorm-255906.firebaseapp.com",
    databaseURL: "https://brainstorm-255906.firebaseio.com",
    projectId: "brainstorm-255906",
    storageBucket: "brainstorm-255906.appspot.com",
    messagingSenderId: "663878551643",
    appId: "1:663878551643:web:3f09552d7a9925d5a9d77e",
    measurementId: "G-YGFP3XY4Z9"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default fire;