
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAcwTqWhTCNXnwr5TCNmPrs8cxntf6RBa8",
    authDomain: "react-email-login-89961.firebaseapp.com",
    projectId: "react-email-login-89961",
    storageBucket: "react-email-login-89961.appspot.com",
    messagingSenderId: "813372849629",
    appId: "1:813372849629:web:31e136a450fb01d0028a34",
    measurementId: "G-TXZ72EDHWE"
})

export const auth = app.auth()
export default app