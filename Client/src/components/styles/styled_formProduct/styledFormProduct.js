import styled from "styled-components";
import theme from "../theme";

export const StyledFormProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${theme.colors.mainDark};
  padding: 0.5em;
  border-radius: 20px;
  color: ${theme.colors.secGreen};

  & h3 {
    margin: 1em;
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;

    & button {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${theme.colors.mainGreen};
      border: 2px solid ${theme.colors.mainGreen};
      background: ${theme.colors.mainDark};
      font-size: 1em;
      padding: 0.25em 1em;
      border-radius: 10px;
      box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
      transition: all 0.2s ease-in;
      margin: 1em 0;
      width: 100%;

      &:hover {
        border: 2px solid whitesmoke;
        box-shadow: none;
        color: whitesmoke;
      }

      &:focus {
        outline: none;
      }
    }
  }

  & .input__box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    & .input {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 45%;
      background-color: ${theme.colors.serDark};
      padding: 1em;
      margin: 0 1em 0 0;
      box-shadow: 0px 3px 10px 0px black;;
      border-radius: 10px;

      & .input__labels {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      & p {
        color: red;
        margin-bottom: 0.5em;
      }

      & h5 {
        margin-bottom: 1em;
      }

      & input {
        color: black;
        border: 2px solid ${theme.colors.mainGreen};
        background: whitesmoke;
        font-size: 1em;
        font-family: ${theme.fonts.signika};
        margin: 0.5em 0 1em 0;
        padding: 0.25em 1em;
        border-radius: 10px;
        box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
        width: 100%;
        transition: all 0.2s ease-in;

        &:focus {
          box-shadow: 2px 2px 0px ${theme.colors.mainGreen};
          outline: none;
        }
      }

      & textarea {
        color: black;
        border: 2px solid ${theme.colors.mainGreen};
        background: whitesmoke;
        font-size: 1em;
        font-family: ${theme.fonts.signika};
        margin-bottom: 1em;
        padding: 0.25em 1em;
        border-radius: 10px;
        box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
        width: 100%;
        transition: all 0.2s ease-in;
        height: 9em;

        &:focus {
          box-shadow: 2px 2px 0px ${theme.colors.mainGreen};
          outline: none;
        }
      }
    }
  }

  .categories {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.serDark};
    padding: 1em;
    margin: 0;
    box-shadow: 0px 3px 10px 0px black;;
    border-radius: 10px;
    & div {
      display: grid;
      justify-items: stretch;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5em;
      margin: 0.5em;
    }

    & .category_card {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      & {
      }
    }
  }
`;
