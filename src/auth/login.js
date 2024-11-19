import { auth } from "../components/config/firebaseConfig";

const login = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const uid = userCredential.user.uid;
    console.log("User UID:", uid);
    return uid;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export default login;
