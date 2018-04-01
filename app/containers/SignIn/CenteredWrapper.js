import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  width: 300px;
  text-align: center;
  transform: translate(-50%, -50%);
  & button {
    width: 100%;
    margin-top: 40px;
  }
`;

export default Wrapper;
