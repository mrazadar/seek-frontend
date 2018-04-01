
import styled, { css } from 'styled-components';
import { VARS } from 'styled-variables';


export const linkStyles = css`
  color: ${({ color }) => color ? VARS[`$${color}`] : VARS.$dark};
  cursor: pointer;
  
  /*&:hover {
    color: ${VARS.$whiteHover};
  }*/
  text-decoration: none;
  margin-right:15px;
`;

const A = styled.a`${linkStyles}`;

export default A;
