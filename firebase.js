
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWvGQSlYz_-FPjaxpKT-OoppnRzpSwmMI",
    authDomain: "c-94bb0.firebaseapp.com",
    projectId: "c-94bb0",
    storageBucket: "c-94bb0.appspot.com",
    messagingSenderId: "827641292829",
    appId: "1:827641292829:web:1e166b5cceeefce6a3bef4"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app()

  const db = app.firestore()

  export default db