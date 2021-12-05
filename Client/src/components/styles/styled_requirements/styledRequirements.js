import styled from "styled-components";
import theme from "../theme";

const StyledRequirements = styled.div`
  width: 100%;
  height: 34em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 3em;
  flex-direction: row;
  justify-content: space-between;

  .information {
    width: 36em;
    height: 23em;
    background-color: #1b1a1f8c;
    color: ${theme.colors.mainGreen};
    overflow: auto;
    padding: 1em;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .information::-webkit-scrollbar {
    width: 8px; /* Tamaño del scroll en vertical */
    height: 8px; /* Tamaño del scroll en horizontal */
    display: fixed; /* Ocultar scroll */
  }

  .information::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  .information::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  .content {
    width: 36em;
    height: auto;
    background-color: transparent;
  }

  .title {
    color: #c8830bbd;
  }

  @media only screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0;

    & .content {
      width: auto;
      height: auto;
      background-color: transparent;
      margin-bottom: 2em;

      & .information {
        width: auto;
        height: 23em;
        background-color: #1b1a1f8c;
        color: #54ecc4;
        overflow: auto;
        padding: 1em;
      }
    }
  }
`;
export default StyledRequirements;
