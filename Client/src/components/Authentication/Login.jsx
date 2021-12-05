import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import StyledButton from "../styles/styled_button/styledButton";
import {FiLogIn as LoginIcon} from "react-icons/fi"
import dotenv from 'dotenv';
dotenv.config();

const h ="http://localhost:3001";

const Login = () => {

  const { loginWithRedirect } = useAuth0();
  return <StyledButton onClick={() => loginWithRedirect({redirect_uri:h})}><LoginIcon/> Log In</StyledButton>;

};

export default Login;