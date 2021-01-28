import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDZKqTuHzTKpqmHJ3RjyfyImHYUo19DNAU",
  authDomain: "dcfakeclone.firebaseapp.com",
  projectId: "dcfakeclone",
  storageBucket: "dcfakeclone.appspot.com",
  messagingSenderId: "1067566906490",
  appId: "1:1067566906490:web:e58c275621babccdfb4fc3",
  measurementId: "G-4Q1YXEESRV"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(),
   auth = firebase.auth(),
   storage = firebase.storage(),
   provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage,provider };