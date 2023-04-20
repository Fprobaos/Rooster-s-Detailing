import {initializeApp} from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyAXbxP68Dm4M3v-ISgEPBOTq3OPi9GQlLc",
    authDomain: "roosters-ff7ee.firebaseapp.com",
    projectId: "roosters-ff7ee",
    storageBucket: "roosters-ff7ee.appspot.com",
    messagingSenderId: "292042164412",
    appId: "1:292042164412:web:5acadb505bc4639c0628b9",
    measurementId: "G-0MJ9EE096W"  
}

const app = initializeApp(firebaseConfig);


export const initFirestore = () => {
    return app
} 