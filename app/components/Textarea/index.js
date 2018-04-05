import styled from 'styled-components';

const Textarea = styled.textarea`
  border:1px solid;
  height:400px;
  width:100%;
  padding:6px;

  &.error{
    color: red;
  }
`;

export default Textarea;
