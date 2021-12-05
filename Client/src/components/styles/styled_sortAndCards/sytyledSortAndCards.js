import styled from "styled-components";
import theme from "../theme";

const StyledSortAndCards = styled.div`
display: flex; 
flex-wrap: wrap; 
justify-content: space-evenly; 
width: 80%; 
margin: auto;
width: auto; 
height: 59em;

@media only screen and (max-width: 1200px) {
                width: auto;
                height: auto;
}

@media only screen and (max-width: 992px) {
                width: auto;
                height: auto;
}

@media only screen and (max-width: 768px) {
                width: auto;
                height: auto;
}

@media only screen and (max-width: 576px) {
                width: auto;
                height: auto;
}


`

export default StyledSortAndCards;