import React from "react";
import { AuthContainer } from "./AuthenticationStyles";

import SignUpForm from "../../components/SignUp-Form/SignUp-Form";
import SignInForm from "../../components/SignIn-Form /SignIn-Form";

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm className="signUp" />
    </AuthContainer>
  );
};

export default Authentication;
