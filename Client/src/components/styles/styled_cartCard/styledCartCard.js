import styled from "styled-components";
import theme from "../theme";

const StyledCartCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.mainDark};
  width: 90%;
  margin: 1em 1em 0em 1em;
  padding: 1em;
  border-radius: 10px;
  align-items: center;
  border: 2px solid ${theme.colors.mainGreen};
  box-shadow: 3px 3px 0px ${theme.colors.mainGreen};

  .details {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .details p {
    color: ${theme.colors.mainGreen};
    margin: 0;
  }

  .details div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .details div p {
    margin: 0 1em 0 0;
  }

  .counters{
    width: 1.5em;
    height: 1.5em;
    background-color: ${theme.colors.mainGreen};
    border-radius: 50%;
    color: black;
    transition: all 0.3s ease-in-out;

    &:hover{
      color: black;
      background-color: whitesmoke;
    }
  }

  h3 {
    font-size: 1em;
    color: whitesmoke;
    /* background-color: ${theme.colors.mainGreen}; */
    border-radius: 5px;
    padding: 3px;
  }

  .Close {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: space-between;
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
`;
export default StyledCartCard;
