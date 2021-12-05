import styled from "styled-components";
import theme from "../theme";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const StyledAdminPanel = styled.div`
  margin: 20px;

  .container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    background-color: ${theme.colors.mainDark};
    border-radius: 20px;
    min-height: 50rem;
    max-height: 20rem;
    width: 80%;
    padding: 10px;
  }

  .selected {
    display: flex;
    background-color: ${theme.colors.serDark};
    min-height: 40rem;
    height: 100%;
    padding: 10px;
    border-radius: 20px;
  }

  .options {
    gap: 5px;
    padding: 5px;
    background-color: ${theme.colors.mainDark};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .options2 {
    @extend .options;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    background-color: ${theme.colors.mainDark};
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
  }

  .options div,
  .btn-op {
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    background-color: black;
    user-select: none;
    border: 2px solid white;
    border-radius: 5px;
    height: 3rem;
    margin: 10px;

    transition: 0.2s all ease-in-out;

    &:hover {
      background-color: whitesmoke;
      cursor: pointer;
      color: black;
    }
  }

  .selectedOp {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: whitesmoke;
    user-select: none;
    border: 2px solid white;
    border-radius: 5px;
    height: 3rem;
    margin: 10px;

    transition: 0.2s all ease-in-out;
  }

  h1 {
    color: ${theme.colors.mainGreen};
  }

  h4 {
    color: black;
  }

  .display {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    /* justify-content: space-evenly; */
    overflow: auto;
    border-radius: 20px;

    &::-webkit-scrollbar {
      width: 8px; /* Tamaño del scroll en vertical */
      height: 8px; /* Tamaño del scroll en horizontal */
      display: fixed; /* Ocultar scroll */
    }

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
    }

    /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #b3b3b3;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
  }

  @media only screen and (max-width: 800px) {
    .selected{
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      height: auto;
      overflow: hidden;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      min-height: auto;
    }
    .options {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .options div{
      padding: 5px;
    }
    .container,
    .display {
      width: auto;
      
    }
  }
`;

export default StyledAdminPanel;
