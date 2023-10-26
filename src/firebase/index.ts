// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAGMnD5IlBkvG-TKp6zP7rMpVfAwpp4M_o",
	authDomain: "codecrafter-7b0fb.firebaseapp.com",
	projectId: "codecrafter-7b0fb",
	storageBucket: "codecrafter-7b0fb.appspot.com",
	messagingSenderId: "306168792795",
	appId: "1:306168792795:web:12514a40d9d448b607eefe",
	measurementId: "G-B7MMYXL195",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
