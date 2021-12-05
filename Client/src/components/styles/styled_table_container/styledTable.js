import styled from 'styled-components'
import theme from '../theme';


export const StyledTable = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px;
    background-color: ${theme.colors.serDark};
    border-radius: 5px;
    margin: 10px;

    .responsiveTable{
        color: whitesmoke;

    }
    
    .asd{
        border-top: 1px solid white;
    }
    
    .head{
        background-color: ${theme.colors.mainDark};
        border-radius: 5px;
        margin: 10px;
        height:3rem;
    }

    .containerTable{
        border: 1px solid white;
    }

    .containerTableTotal{
        border: 1px solid black;
        background-color: whitesmoke;
        color: black;
    }

`;