import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFields);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return;
    }
    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      alert("succesfully created account");
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container sign-up-container">
      <div className="form-container">
        <h2>Don't have an account? </h2>
        <p>Register</p>
        <form onSubmit={onSubmitHandler}>
          <FormInput
            htmlFor="name"
            label="Display Name"
            type="text"
            id="name"
            name="displayName"
            value={displayName}
            onChange={onChangeHandler}
            required
          />

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

          <FormInput
            label="Confirm Password"
            htmlFor="confirm-password"
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChangeHandler}
            required
          />

          <div className="input-container">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
