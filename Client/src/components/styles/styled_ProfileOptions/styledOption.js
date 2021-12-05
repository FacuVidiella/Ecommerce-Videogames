import styled from "styled-components";
import theme from "../theme";

const StyledOption = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${theme.colors.mainDark};
  width: 90%;
  margin: 1em 1em 0em 1em;
  padding: 1em;
  border-radius: 10px;
  align-items: center;
  border: 2px solid ${theme.colors.mainGreen};
  box-shadow: 3px 3px 0px ${theme.colors.mainGreen};
  height: auto;

  .gameIMG{
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    justify-content: center;
    align-items: center;
    border: 2px solid whitesmoke;
  }

  img{
      width: 10rem;
      /* border-radius: 50%; */
  }

`;
export default StyledOption;
