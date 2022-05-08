import styled from 'styled-components';

const HeaderContainer = styled.header`
  & > .coyHeader {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  /* box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); */
  height: 80px;

  
  & .navContainer{
    display: flex;
    justify-content: space-around;
    align-items: center;
   
    margin: 2rem;

    & a {
      padding: 0 1rem;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      color: #000;
    }

  }
  }
  & .coyLogo {
    display: flex;

    & > .faUmbLogo { 
    width: 100px;
    height: 50px;
    margin: 12px 0px;
  }

  }

  @media screen and (max-width: 960px) {
    & > .coyHeader{
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      height: auto;
      & .coyLogo .coyName {
        display: none;
      }
      & .navContainer{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        & a {
          padding: 0;
          margin: 0;
        }
      }
    }
    
  }
  
  

`;

export default HeaderContainer;