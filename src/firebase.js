import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB--1UBUQqeCmTh_KeDUQFqLFQhebmwS0o',
  authDomain: 'whatsapp-clone-31f81.firebaseapp.com',
  projectId: 'whatsapp-clone-31f81',
  storageBucket: 'whatsapp-clone-31f81.appspot.com',
  messagingSenderId: '1501672440',
  appId: '1:1501672440:web:a8e8964de1a44867581c0d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
