import styled from 'styled-components';
import { VARS } from 'styled-variables';

const Input = styled.input`
  display: block;
  padding: 0 30px;
  line-height: 60px;
  height: 60px;
  border-radius:50px;
  margin-bottom:10px;
  width:100%;
  font-weight:500;
  font-size:19px;
  background: ${VARS.$gray};
  border:0;
  outline:none;
  &.error{
    color: red;
  }
`;

export default Input;
