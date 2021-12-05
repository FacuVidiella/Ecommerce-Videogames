import styled from "styled-components";
import theme from "../theme";


export const StyledUserImage = styled.div`

    border-radius: 50%;
    width: 3.5rem;
    margin-left: 0px !important;
    margin-bottom: 5px;
    
    &:hover img{
        border: 3px white solid;
    }
    
    img{
        width: 100%;
        border-radius: 50%;
        border: 3px solid ${theme.colors.secGreen};
        box-shadow: 3px 3px 0px ${theme.colors.mainGreen};
        transition: 0.5s all ease-in-out;
    }
`;