import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBELzMwD4UHiVmmdi_V_1ZKL6BUYvU0iTY",
  authDomain: "devins-bikes.firebaseapp.com",
  databaseURL: "https://devins-bikes.firebaseio.com",
  projectId: "devins-bikes",
  storageBucket: "",
  messagingSenderId: "268482814667"
};
firebase.initializeApp(config);
export default firebase;
