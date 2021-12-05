import styled from "styled-components";
import theme from "../theme";

const StyledGenres = styled.div `
  display: flex;
  flex-direction: row-reverse;
  color: ${theme.colors.mainGreen};
  justify-content: center;
  height: 100%;


  & .genres {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 1.5em;
    height: 100%;
    margin-left: 1em;

    & h4 {
      margin-bottom: 1em;
    }

    & .genres_cards {
      display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    /* height: 54.25em; */
    width: min-content;
    justify-items: stretch;
    align-items: stretch;
    background-color: #00000036;
    padding: 0.250em;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;

      & button {
        justify-content: center;
        background-color: transparent;
        border: none;
        color: whitesmoke;
        margin: 1em;

        &:hover{
          animation: myAnim 0.5s ease 0s infinite normal forwards;
      text-shadow: 0px 1px 12px #54ecc4;
      cursor: pointer;
        }
      }
    }

    @keyframes myAnim {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

    /* & p {
            margin: 0;
            cursor: pointer;

            &:hover {
                animation: myAnim 0.5s ease 0s infinite normal forwards;
                text-shadow: 0px 1px 12px #54ecc4;
                cursor: pointer;
            }
        }

        .active{
    text-shadow: 0px 1px 12px #54ecc4;
    color: antiquewhite;
  }
  @keyframes myAnim {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }


        & hr{
            background-color: ${theme.colors.mainGreen};
            color: ${theme.colors.mainGreen};
            margin: 0.5em 0;
        } */
  }

  .genOp {
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    background: rgb(0, 215, 210);
    background: linear-gradient(
      90deg,
      rgba(0, 215, 211, 0.671),
      rgba(64, 170, 246, 0.801),
      rgba(255, 0, 115, 0.795)
    );
    /* padding: 0.5em;
  padding-left: 2em;
  padding-right: 2em; */
    margin: 1em;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    border: 1px solid white;
    &:hover {
      box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
        rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
        rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
      border: 0px;
    }
  }

  @media only screen and (max-width:800px) {
    flex-direction: column;
    .genOp {
      padding: 0.125em;
      height: min-content;
      &p {
        margin: 0;
        padding: 0;
      }
    }

    .genres {
      display: flex;
      margin-left: 0;
      flex-direction: column;
      flex-wrap: wrap;
      height: min-content;
      justify-content: center;
      position: inherit;
    }
  }
`;

export default StyledGenres;