import styled from 'styled-components';


export const UserInfo = styled.div`
  font-size:18px;
  display:inline-block;
  position:relative;
  .user-rating-country{
    .user-rating{
      &:after{
        content: "|";
        padding:0 15px;
      };
    }
  }
`;


const ListItemWrapper = styled.div`
  padding:20px 30px;
  font-weight:500;
  
`;

export default ListItemWrapper;
