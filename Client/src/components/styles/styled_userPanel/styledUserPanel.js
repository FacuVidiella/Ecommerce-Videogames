import styled from "styled-components";
import theme from "../theme";

export const StyledUserPanel = styled.div`
  display: flex;
  background-color: ${theme.colors.mainDark};
  border: 2px ${theme.colors.secGreen};
  box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
  border-radius: 20px;
  width: 80rem;
  height: 40rem;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;

  .container-option::-webkit-scrollbar {
    width: 10px; /* Tamaño del scroll en vertical */
    height: 8px; /* Tamaño del scroll en horizontal */
    display: fixed; /* Ocultar scroll */
    background-color: #000000;
  }

  .container-option::-webkit-scrollbar-thumb {
    background: #54ecc4;
    border-radius: 4px;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  .container-option::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Cambiamos el fondo cuando esté en active */
  .container-option::-webkit-scrollbar-thumb:active {
    background-color: #000000;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .buttons {
    display: flex;
    flex-direction: column;
  }

  .titleInfo,
  .orderInfo {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    background-color: ${theme.colors.serDark};
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
  }

  h4 {
    text-align: center;
  }

  .container-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    background-color: ${theme.colors.serDark};
    border-radius: 20px;
    height: 30rem;
    padding: 10px;
  }

  @media only screen and (max-width: 576px) {
    height: auto;
    width: auto;
    justify-content: center;
    .container {
      display: flex;
      flex-direction: column;
      
      margin: 0;
    }
  }
`;
