import firebase from 'firebase/app';
import 'firebase/database';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCpNA2ozr0gYN8OKeuKOfYYUWgQ4_fY_vA",
    authDomain: "tccscglapom.firebaseapp.com",
    databaseURL: "https://tccscglapom.firebaseio.com",
    projectId: "tccscglapom",
    storageBucket: "tccscglapom.appspot.com",
    messagingSenderId: "482955133339"
  };
  firebase.initializeApp(config);

export const database = firebase.database()