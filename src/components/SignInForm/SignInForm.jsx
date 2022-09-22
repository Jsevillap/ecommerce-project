import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import {
  signInWithGooglePopup,
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
      const { user } = await signInUserWithEmailAndPassword(email, password);
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
    await signInWithGooglePopup();
  };

  return (
    <section className="container sign-up-container">
      <div className="form-container">
        <h2>Log in</h2>
        <p>with email and password</p>
        <form onSubmit={onSubmitHandler}>
          <FormInput
            htmlFor="sign-in-email"
            label="Email"
            type="email"
            id="sign-in-email"
            name="email"
            value={email}
            onChange={onChangeHandler}
            required
          />

          <FormInput
            label="Password"
            htmlFor="sign-in-password"
            type="password"
            id="sign-in-password"
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
