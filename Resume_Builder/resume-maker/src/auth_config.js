import { initializeApp } from "firebase/app";
import {  getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDV_B5NdV7dYqJi5pu-bR4QfrPihDlzIpM",
  authDomain: "intern-project-233da.firebaseapp.com",
  projectId: "intern-project-233da",
  storageBucket: "intern-project-233da.appspot.com",
  messagingSenderId: "1072225205465",
  appId: "1:1072225205465:web:734c94e2c9a967dd1552c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
