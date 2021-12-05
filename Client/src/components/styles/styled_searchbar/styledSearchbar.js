import styled from 'styled-components'
import theme from '../theme.js'

const StyledSearchbar = styled.input`
  color: black;
  border: 2px solid ${theme.colors.mainGreen};
  background: whitesmoke;
  font-size: 1em;
  font-family: ${theme.fonts.signika};
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
  box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
  width: 100%;

  transition: all 0.2s ease-in;

  &:focus{
    box-shadow: 2px 2px 0px ${theme.colors.mainGreen};
    outline: none;
  }
`;

export default StyledSearchbar;