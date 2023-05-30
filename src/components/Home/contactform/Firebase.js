import { initializeApp } from "firebase/app";
import 'firebase/database';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyAgo82UVBKdgWI76uQaWHUX4aBSPh7HbEc",
    authDomain: "portfolio-d8a9f.firebaseapp.com",
    projectId: "portfolio-d8a9f",
    storageBucket: "portfolio-d8a9f.appspot.com",
    messagingSenderId: "913652828098",
    databaseURL: "https://resume-d8f63-default-rtdb.firebaseio.com",
    appId: "1:913652828098:web:32f91461f53d9d09e0f85b",
    measurementId: "G-MDKGSHQCH3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);