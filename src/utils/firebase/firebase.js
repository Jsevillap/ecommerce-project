//start firebase
import { initializeApp } from "firebase/app";
//Authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//firestore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpH6tDP4hOh78BJe-W-LXxuQNSifOB_Mg",
  authDomain: "ecommerce-dobleee.firebaseapp.com",
  projectId: "ecommerce-dobleee",
  storageBucket: "ecommerce-dobleee.appspot.com",
  messagingSenderId: "1052638691486",
  appId: "1:1052638691486:web:bc6e64c93c3022ef43bb8f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};
