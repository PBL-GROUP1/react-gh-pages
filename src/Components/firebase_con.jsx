import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object


const firebaseConfig = {
  apiKey: "AIzaSyBKMBtvzLatdS_5c8l-1lY-dHw_F6nQJsA",
  authDomain: "home-3f3d6.firebaseapp.com",
  projectId: "home-3f3d6",
  storageBucket: "home-3f3d6.appspot.com",
  messagingSenderId: "246595446793",
  appId: "1:246595446793:web:4ca92b821dc95d608eb0d8",
  measurementId: "G-77MX6ZVR9T"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
  
export default auth;



