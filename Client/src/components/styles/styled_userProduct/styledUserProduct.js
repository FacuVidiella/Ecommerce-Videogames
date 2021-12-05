import styled from "styled-components";
import theme from "../theme";

export const StyledUserProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em;

  .bar{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 1em;

      & .input{
          width: 50%;
      }
  }

`;
