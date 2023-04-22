import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }

}

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  }
  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
}