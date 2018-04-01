import styled from 'styled-components';
import { VARS } from 'styled-variables';


export const MessageContainer = styled.span`
  color: ${VARS.$black};
  display: inline-block;
  margin-right:30px;
  text-transform: uppercase;
  text-align: right;
  font-weight: 300;
  font-size:13px;
  line-height: 13px;
  letter-spacing: 1.95px;
  vertical-align: middle;
`;


export default styled.div`
  float:right;
  margin-top: 12px;
  & a {
    padding:0 13px;
    font-size: 13px;
    height: 36px;
    line-height: 36px;
  }
`;
