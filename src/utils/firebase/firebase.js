//start firebase
import { initializeApp } from "firebase/app";
//Authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
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
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};

export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
