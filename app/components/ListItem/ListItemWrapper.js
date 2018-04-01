import styled from 'styled-components';
import { VARS } from 'styled-variables';


const ListItemWrapper = styled.div`
  padding:20px 30px;
  font-weight:500;
  border:1px solid ${VARS.$gray};
  margin: ${({ adType }) => adType === 'premium' ? '10px' : 0};
  ${
    (props) => {
      if (props.adType === 'premium') {
        return `
          & .title{
            color:green;
          }
        `;
      }
      return `
          color:${VARS.$black};
      `;
    }


}  
`;

export default ListItemWrapper;
