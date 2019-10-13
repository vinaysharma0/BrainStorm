import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAJw7pno9iV7lddFFZd4E_IClAjD3o1J_g",
    authDomain: "brainstorm-deebf.firebaseapp.com",
    databaseURL: "https://brainstorm-deebf.firebaseio.com",
    projectId: "brainstorm-deebf",
    storageBucket: "brainstorm-deebf.appspot.com",
    messagingSenderId: "203209343360",
    appId: "1:203209343360:web:6cc50eb88be9c679138165",
    measurementId: "G-L5P7NTHPF6"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default fire;