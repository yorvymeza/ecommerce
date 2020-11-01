import firebase from 'firebase/app'


require("firebase/auth");
require("firebase/firetone");
require("firebase/storage");
require("firebase/functions");


var firebaseConfig = {
    apiKey: "AIzaSyAY1l2lWpzTo22_gVSUqV5ft2dWMWVYUQA",
    authDomain: "ecommerce-app-49f6e.firebaseapp.com",
    databaseURL: "https://ecommerce-app-49f6e.firebaseio.com",
    projectId: "ecommerce-app-49f6e",
    storageBucket: "ecommerce-app-49f6e.appspot.com",
    messagingSenderId: "963786952823",
    appId: "1:963786952823:web:be5fecd8d4f9b15239f672",
    measurementId: "G-0P4FQCXG5M"
                    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth=firebase.auth()
const db=firebase.firestone()
const storage=firebase.storage()
const functions=firebase.functions()


export{
   firebase,
   auth,
   db,
   storage,
   functions

}