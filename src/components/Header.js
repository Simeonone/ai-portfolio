import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.7);  // Semi-transparent dark background
  color: #fff;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(5px);  // Adds a frosted glass effect
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: #00ff00;  // Green to match the AI theme
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
    return (
      <HeaderContainer>
        <Nav>
          <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
          <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
          <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
        </Nav>
      </HeaderContainer>
    );
  }

export default Header;