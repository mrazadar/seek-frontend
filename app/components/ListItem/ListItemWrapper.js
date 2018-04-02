import styled from 'styled-components';
import { VARS } from 'styled-variables';


const ListItemWrapper = styled.div`
  padding:20px 30px;
  font-weight:500;
  border:1px solid ${VARS.$gray};
  margin: ${({ adType }) => adType === 'premium' ? '10px' : 0};
  position:relative;
  .logo{
    position: absolute;
    right:100px;
    top:20px;
    width:70px;
    height:70px;
    img {
      width:50px;
      height:50px;
    }
  }
  ${
    (props) => {
      if (props.adType === 'premium') {
        return `
          border-color: green;
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
