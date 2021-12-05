import styled from "styled-components";
import theme from "../theme";

export const StyledProductCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: #1b1a1f;
  width: 17rem;
  height: 25rem;
  position: relative;
  overflow: hidden;
  color: whitesmoke;
  border: 2px solid #54ecc4;
  border-radius: 10px;
  box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
  margin: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 1em;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;

  .black-background {
    background: black !important;
    color: whitesmoke !important;
  }

  .img-bg {
    display: flex;
    height: 11em;
    width: 100%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;

    & a {
      height: 100%;
      width: 100%;
    }
  }

  .img-bg img {
    width: 100%;
    height: 100%;
    transition: 0.5s all ease-in-out;
  }

  &:hover {
    box-shadow: none;
    outline: 2px solid whitesmoke;

    .img-bg img {
      filter: grayscale();
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    height: 12em;
    width: 15.5em;

    & .wish {
      cursor: pointer;
    }

    & .name {
      width: 100%;
      height: 5em;

      & h4 {
        margin: auto;
        font-size: 1.2em;
        text-align: center;
      }
    }

    & .price {
      border: 3px dashed ${theme.colors.mainGreen};
      border-radius: 5px;
      padding: 5px 15px;
      margin: 0.5em 0;

      & h4 {
        margin: auto;
      }
    }

    & .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 5em;

      & button {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: ${theme.colors.mainGreen};
        border: 2px solid ${theme.colors.mainGreen};
        background: ${theme.colors.mainDark};
        font-size: 1em;
        margin: 0.8em;
        padding: 0.25em 1em;
        border-radius: 10px;
        box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
        height: 4em;
        width: 9em;
        transition: all 0.2s ease-in;

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
    & svg {
      height: 2em;
      width: 2em;
    }
  }

  img {
    max-width: 100%;
    max-height: max-content;
}
@media only screen and (max-width: 576px) {
    display:block;
    grid-template-rows: repeat(1,1fr);
    justify-items: center;
    
    }




`;
