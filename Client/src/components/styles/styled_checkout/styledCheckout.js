import styled from 'styled-components'
import theme from '../theme';


export const StyledChekout = styled.div`
    width: 100%;
    height: 40.3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px;
    background-color: ${theme.colors.serDark};
    border-radius: 5px;
    
    .line {
        border-bottom: solid 1px ${theme.colors.terGreen};
        width: 81%;
        position: relative;
        margin: 1em 0;
    }

    .responsiveTable{
        color: whitesmoke;

        & tbody tr {
            position: relative;
            margin-bottom: 1em;
        }

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