import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
        apiKey: "AIzaSyDCpiR9jDIbKV4-LT1HE76CXAiGgZHKEPQ",
        authDomain: "zecrypt-vault.firebaseapp.com",
        projectId: "zecrypt-vault",
        storageBucket: "zecrypt-vault.firebasestorage.app",
        messagingSenderId: "491833096829",
        appId: "1:491833096829:web:1ab487870bfb067676cf14",
        measurementId: "G-M6CGXK6H3L"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export { auth, googleProvider, githubProvider, signInWithPopup }