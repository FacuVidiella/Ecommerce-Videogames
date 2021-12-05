import styled from "styled-components";

export const StyledBadge = styled.div `
position: absolute;
  display: inline-block;
  top:${props => props.top || '0.3em'} ; 
  right: ${props => props.right || '0.8em'} ;
  max-width: 5em;
  color: #fff;
  z-index: 1;


  &::after {
  position: absolute;
  top:${props => props.afterT || '-1.5em'} ;
  right:${props => props.afterR || '-6em'} ;
  content: "";
  height: 5em;
  width: 15em;
  transform: ${props => props.rotate || 'rotatez(45deg)'};
  background-color: #ff0081d1;
  z-index:-1;
  border-bottom: 2px dotted whitesmoke;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
p{
    transform: rotatez(45deg) !important;
    margin: 14px -24px 0px 29px !important;
    margin-bottom:0;
}
`