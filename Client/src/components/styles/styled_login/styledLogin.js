import styled from "styled-components";
import theme from "../theme.js";

const StyledLogin = styled.div`
  color: ${theme.colors.mainGreen};
  background-color: ${theme.colors.mainDark};
  width: auto;
  height: auto;
  box-shadow: 0px 5px 19px 2px #000;
  border-radius: 12px;
  border: 4px solid ${theme.colors.secGreen};
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding: 1em;

  .Close {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .Close button {
    background-color: transparent;
    border: none;
    color: ${theme.colors.mainGreen};
    transition: color 0.5s;
  }

  .Close button:hover {
    color: #ff00009e;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .Input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }

  .Input p {
    margin-bottom: 10px;
  }

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .login div {
    display: flex;
    margin-top: 1em;
  }

  .login div button {
    display: flex;
    align-items: center;
    margin: 1em;
    width: 9em;
    justify-content: space-around;
  }

  .login button {
    color: ${theme.colors.mainGreen};
    border: 2px solid ${theme.colors.mainGreen};
    background: ${theme.colors.mainDark};
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 10px;
    box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
  }
`;

export default StyledLogin;
