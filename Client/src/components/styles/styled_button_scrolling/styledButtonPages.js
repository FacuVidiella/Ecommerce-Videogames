import styled from "styled-components";
import theme from "../theme";



export const PagingButton = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background: transparent;
    border: none !important;
    width: fit-content;

    

    .pages{
        display: flex;
        justify-content:center;
        align-items:center;
        width: 2rem;
        height: 2rem;
        border: 2px whitesmoke solid;
        background-color: ${theme.colors.mainGreen};
        color: black;
        border-radius: 50%;
        cursor: pointer;
        font-weight: bold;
        margin: 10px;
    }

    .leftButton{
        display: flex;
        justify-content:center;
        align-items:center;
        border-radius: 50%;
        border: 0px;
        width: 2rem;
        height: 2rem;
    }

    .rightButton{
        display: flex;
        justify-content:center;
        align-items:center;
        border-radius: 50%;
        border: 0px;
        width: 2rem;
        height: 2rem;
    }
`





