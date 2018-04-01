import { Link } from 'react-router-dom';
import styled from 'styled-components';

import buttonStyles from './buttonStyles';


export default styled(Link)`
  ${buttonStyles}
  display: inline-block;
  text-decoration: none;
`;
