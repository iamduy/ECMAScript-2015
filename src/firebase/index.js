import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyCvSONFtjOsZPGDDEHgv21WKscVoVM9E0k",
    authDomain: "shop-ea818.firebaseapp.com",
    projectId: "shop-ea818",
    storageBucket: "shop-ea818.appspot.com",
    messagingSenderId: "420860374125",
    appId: "1:420860374125:web:e32ecb06d0b6c5e295a364"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;