import styled from "styled-components";
import {GiCrossedBones as Cross} from 'react-icons/gi'
import theme from "../theme";


export const StyledCloseButton = styled(Cross)`
    width: 1em;
    height: 1em;
    color: ${theme.colors.mainGreen};
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover{
        color: red;
    }
`;