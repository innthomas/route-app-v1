import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
    <p>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="
      https://
      reactjs.org">React</a>
    </p>
  </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.footer`
text-align: center;
`;