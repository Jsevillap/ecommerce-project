import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

const SignIn = () => {
  return (
    <div className="container sign-in">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
