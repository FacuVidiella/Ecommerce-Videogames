import styled from "styled-components";
import theme from "../theme";

export const StyledEditProduct = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;


  & .content_cards {
    width: auto;
    height: auto;
    margin: 1em;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.terGreen};
    font-weight: bolder;
    font-size: 1.5em;

    & img {
      width: 100%;
      height: 100%;
      margin-bottom: 0.5em;
    }

    .buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .blue {
        width: 100%;
        display: flex;
        margin-bottom: 0.5em;
        justify-content: space-between;

        & button {
            width: 49%;
        }

      }
      & button {
        width: 100%;

      }
    }
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
