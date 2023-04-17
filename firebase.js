import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_rqqQjqHLn0-48ik97RO7jSY8IH8uzZo",
  authDomain: "siganl-clone-f4705.firebaseapp.com",
  projectId: "siganl-clone-f4705",
  storageBucket: "siganl-clone-f4705.appspot.com",
  messagingSenderId: "351303368916",
  appId: "1:351303368916:web:4349164fff19fb3ccdbb41",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
