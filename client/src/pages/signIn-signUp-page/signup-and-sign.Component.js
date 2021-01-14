import React from 'react';

import SignIn from '../../components/sign-in/sign-in.Component';
import SignUp from '../../components/sign-up/sign-up.Component';

import { SignInAndSignUpContainer } from './signup-and-signin.Style';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage