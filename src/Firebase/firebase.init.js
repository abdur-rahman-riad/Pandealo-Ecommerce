import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*-------------------------------
    Steps for Authentication

Initial Setup
1. Create Firebase Projects
2. Create Web App in Firebase Project
3. Get Configuration
4. Initialize Firebase
5. Enable Auth Method
-------------------------------*/