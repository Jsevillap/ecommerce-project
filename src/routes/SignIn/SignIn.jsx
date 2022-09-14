import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In with google</button>
    </div>
  );
};

export default SignIn;
