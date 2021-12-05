import styled from "styled-components";
import theme from "../theme";

const StyledFooter = styled.div`
position: relative;

  width: auto;
  height: 10em;
  color: #ffffff82;
  border-top: 2px solid #4cd5b1;
  background-color: #1b1a1f;
  padding: 6em 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-direction: column;
  transition: color 1s;
  



  div {
   
    display: flex;
    width: 100%;
    justify-content: center;
  }

  div label {
    margin: 0 1em;
    cursor: pointer;
  }

  div label:hover {
    margin: 0 3em;
    cursor: pointer;
    color: #eaf7f4;
  }

  p {
    margin: 0;
  }
  h2 {
    margin: 0;
    color: #eaf7f4;
  }
  @media only screen and (max-width: 1200px){
    display: grid;
    grid-template-rows: repeat(3,1fr);
    justify-items: center;
    }
    @media only screen and (max-width: 992px){
        display: grid;
        grid-template-rows: repeat(3,1fr);
        justify-items: center;
        }
        @media only screen and (max-width: 768px){
            display: grid;
            grid-template-rows: repeat(2,1fr);
            justify-items: center;
            }
            @media only screen and (max-width:576px){
                display: grid;
                grid-template-rows: repeat(1,1fr);
              justify-items: center;
             .div {}
                }

`;

export default StyledFooter;
