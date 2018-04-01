import { css } from 'styled-components';
import { VARS } from 'styled-variables';

const buttonStyles = css`
  height: 60px;
  line-height:60px;
  padding: 0 45px;
  border: 0;
  font-weight: 500;
  font-size: 19px;
  text-transform: uppercase;
  border-radius: 50px;
  box-sizing: border-box;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.5);
  cursor:pointer;
  &:hover{
    background:${VARS.$black}
  }
  &.ladda-button[disabled], 
  &.ladda-button[disabled]:hover, 
  &.ladda-button[data-loading], 
  &.ladda-button[data-loading]:hover{
   background: ${VARS.gray} !important; 
  }

  background: ${VARS.$gray};
  color: ${VARS.$dark};
  font-size: 16px;
  height: 50px;
  margin-bottom: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  line-height: 50px;
  width: 100%;

`;

export default buttonStyles;
