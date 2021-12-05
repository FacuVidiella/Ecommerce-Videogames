import styled from "styled-components";
import theme from "../theme.js";

const StyledDropdownWish = styled.div`
  position: absolute;
  top: 9em;
  z-index: 2;
  width: 23em;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  background-color: ${theme.colors.mainDark};
  border: ${theme.colors.mainGreen} solid 1px;
  margin: 0 !important;
  padding: 10px;
  cursor: default !important;

  & p {
    margin: 0;
  }

  .arrow_box {
    position: relative;
    top: -10px;
    background: #1b1a1f;
  }
  .arrow_box:after,
  .arrow_box:before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .arrow_box:after {
    border-color: rgba(27, 26, 31, 0);
    border-bottom-color: #1b1a1f;
    border-width: 20px;
    margin-left: -20px;
  }
  .arrow_box:before {
    border-color: rgba(84, 236, 196, 0);
    border-bottom-color: #54ecc4;
    border-width: 23px;
    margin-left: -23px;
  }

  div {
    display: flex;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 576px) {
    top: 19em;
  }
`;

export default StyledDropdownWish;
