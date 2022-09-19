import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      resetForm();
      alert("succesfully logged in");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not Found");
          break;
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        default:
          console.log(error);
      }
    }
  };

  const resetForm = () => {
    setFormFields(defaultFields);
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <section className="container sign-up-container">
      <div className="form-container">
        <h2>Log in with email and password</h2>
        <form onSubmit={onSubmitHandler}>
          <FormInput
            htmlFor="email"
            label="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeHandler}
            required
          />

          <FormInput
            label="Password"
            htmlFor="password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangeHandler}
            required
          />

          <div className="input-container">
            <button type="submit">Log in</button>
            <button type="button" onClick={logGoogleUser}>
              Log in with Google
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInForm;
