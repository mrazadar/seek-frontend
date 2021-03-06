import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VARS } from 'styled-variables';

const Title = styled(Link)`
  font-size:19px;
  text-transform: uppercase;
  color: ${VARS.$white};
  line-height: 60px;
  font-weight: 300;
  letter-spacing: 2px;
  text-decoration:none;
  display: inline-block;
`;

export default Title;
