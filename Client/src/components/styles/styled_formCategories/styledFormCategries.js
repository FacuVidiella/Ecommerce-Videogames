import styled from "styled-components";
import theme from "../theme";



export const StyledFormCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${theme.colors.mainDark};
    color: ${theme.colors.mainGreen};
    height: 100%;
    border-radius: 20px;

    & h3 {
        margin: 1em 0 ;
    }


    & .forms{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        height: 100%;
        align-items: flex-start;
        position: relative;
        margin: auto;

        & .forms__removeCategory{
            display: flex;
            flex-direction: column;
            font-weight: bolder;

            & .updateCategory {
                margin-top: 1em;
                display: flex;
                flex-direction: column;


                & h2 {
                    font-weight: bolder;
                    font-size: 1em;
                    margin: 0; 

                }


                & input {
                color: black;
                border: 2px solid ${theme.colors.mainGreen};
                background: whitesmoke;
                font-size: 1em;
                font-family: ${theme.fonts.signika};
                margin: 1em 0 0.5em 0;
                padding: 0.25em 1em;
                border-radius: 20px;
                box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
                width: 100%;
                transition: all 0.2s ease-in;

                &:focus{
                    box-shadow: 2px 2px 0px ${theme.colors.mainGreen};
                    outline: none;
                }

                & button {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: ${theme.colors.mainGreen};
                border: 2px solid ${theme.colors.mainGreen};
                background: ${theme.colors.mainDark};
                font-size: 1em;
                padding: 0.25em 1em;
                border-radius: 10px;
                box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
                transition: all 0.2s ease-in;
                margin-bottom: 2em;
                width: 100%;


                &:hover{
                    border: 2px solid whitesmoke;
                    box-shadow: none;
                    color: whitesmoke;
                }

                &:focus{
                    outline: none;
                }
            }
            }


            }


            & select {
                color: black;
                border: 2px solid ${theme.colors.mainGreen};
                background: whitesmoke;
                font-size: 1em;
                font-family: ${theme.fonts.signika};
                margin: 1em 0 2em 0;
                padding: 0.25em 1em;
                border-radius: 20px;
                box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
                width: 100%;
                transition: all 0.2s ease-in;

                &:hover{
                    box-shadow: 2px 2px 0px ${theme.colors.mainGreen};
                    outline: none;
                }
            }

            & button {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: ${theme.colors.mainGreen};
                border: 2px solid ${theme.colors.mainGreen};
                background: ${theme.colors.mainDark};
                font-size: 1em;
                padding: 0.25em 1em;
                border-radius: 10px;
                box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
                transition: all 0.2s ease-in;
                margin-bottom: 2em;
                width: 100%;


                &:hover{
                    border: 2px solid whitesmoke;
                    box-shadow: none;
                    color: whitesmoke;
                }

                &:focus{
                    outline: none;
                }
            }
        }

        & .forms__addCategory {
            font-weight: bolder;
            display: flex;
            flex-direction: column;
            
            & input {
                color: black;
                border: 2px solid ${theme.colors.mainGreen};
                background: whitesmoke;
                font-size: 1em;
                font-family: ${theme.fonts.signika};
                margin: 1em 0 2em 0;
                padding: 0.25em 1em;
                border-radius: 20px;
                box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
                width: 100%;
                transition: all 0.2s ease-in;

                &:focus{
                    box-shadow: 2px 2px 0px ${theme.colors.mainGreen};
                    outline: none;
                }
            }

            & button {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: ${theme.colors.mainGreen};
                border: 2px solid ${theme.colors.mainGreen};
                background: ${theme.colors.mainDark};
                font-size: 1em;
                padding: 0.25em 1em;
                border-radius: 10px;
                box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
                transition: all 0.2s ease-in;


                &:hover{
                    border: 2px solid whitesmoke;
                    box-shadow: none;
                    color: whitesmoke;
                }

                &:focus{
                    outline: none;
                }
            }

        }
    }

`

