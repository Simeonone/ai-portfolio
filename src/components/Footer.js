import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const Links = styled.div`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #00ff00;
  margin: 0 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const OldPortfolioLink = styled(Link)`
  display: block;
  margin-top: 10px;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-top: 10px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Links>
        <Link href="https://www.linkedin.com/in/simeon-osiemo-6aa62a185/" target="_blank" rel="noopener noreferrer">
          <Icon><FaLinkedin /></Icon>
          LinkedIn
        </Link>
        <Link href="https://github.com/Simeonone" target="_blank" rel="noopener noreferrer">
          <Icon><FaGithub /></Icon>
          GitHub
        </Link>
      </Links>
      <OldPortfolioLink href="https://simeon-osiemo-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
        See Where It All Began: Visit My Earlier Projects
      </OldPortfolioLink>
      <Copyright>&copy; 2024 Simeon Osiemo.</Copyright>
    </FooterContainer>
  );
}

export default Footer;