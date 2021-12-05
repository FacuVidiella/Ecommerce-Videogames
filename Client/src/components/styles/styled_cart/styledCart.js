import styled from "styled-components";
import theme from "../theme";

const StyledCart = styled.div`
  position: fixed;
  padding: 1em;
  top: 0;
  right: 0;
  width: 23em;
  height: 100vh;
  background-color: ${theme.colors.mainDark};
  color: ${theme.colors.mainGreen} !important;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s;

  h2 {
  }

  .contentCards {
    display: flex;
    background-color: ${theme.colors.serDark};
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    border-radius: 10px;
  }

  .contentCards::-webkit-scrollbar {
    width: 8px; /* Tamaño del scroll en vertical */
    height: 8px; /* Tamaño del scroll en horizontal */
    display: fixed; /* Ocultar scroll */
  }

  .contentCards::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
.contentCards::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
.contentCards::-webkit-scrollbar-thumb:active {
    background-color: #999999;
}

  .Close {
    border-radius: 10px;
  }

  .CloseCart {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  hr {
    width: 100%;
    height: 5px;
    color: ${theme.colors.mainGreen};
    border-radius: 20%;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .total{
    display: flex;
    justify-content: space-evenly;
    color: whitesmoke;
  }
`;

export default StyledCart;
