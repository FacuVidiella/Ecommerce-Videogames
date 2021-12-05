import styled from "styled-components";
import theme from "../theme.js";

const StyledWishCard = styled.div`
  display: flex !important;
  flex-direction: row !important;
  margin: 1em 1em 1em 1em !important;
  justify-content: space-between;
  cursor: default !important;

  & a {
      text-decoration: none !important;
  }
  

  & h2 {
      font-size: 1.3em;
      margin: 0;
      color: ${theme.colors.mainGreen};
      cursor: pointer !important;

  }
`;

export default StyledWishCard;
