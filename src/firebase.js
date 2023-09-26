import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPvXw5dPTmaVtPtWs_YunrqjaplU6fJVo",
    authDomain: "netflix-clone-1fa59.firebaseapp.com",
    projectId: "netflix-clone-1fa59",
    storageBucket: "netflix-clone-1fa59.appspot.com",
    messagingSenderId: "836346901567",
    appId: "1:836346901567:web:f2fe691f8621b260ee348a",
    measurementId: "G-JESTBHF0W7"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export default db;
export { auth };