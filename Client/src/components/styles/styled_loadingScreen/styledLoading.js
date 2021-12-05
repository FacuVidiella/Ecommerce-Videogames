import styled from "styled-components";
import theme from '../theme.js'
export const StyledLoadingScreen = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.mainDark};
    align-items: center;
    justify-content: center;

.loading{
    width: 30rem;
    height: 10rem;
}

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1{
    color: white;
}

`;