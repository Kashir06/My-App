import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4VkxOzsUgMdWFFBfbXlfBFzM9KPmgf_U",
  authDomain: "facebook-clone-yt-176fd.firebaseapp.com",
  projectId: "facebook-clone-yt-176fd",
  storageBucket: "facebook-clone-yt-176fd.appspot.com",
  messagingSenderId: "452357778727",
  appId: "1:452357778727:web:789c1e58b2aba590b9cd02",
  measurementId: "G-XZVENDLHK2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
