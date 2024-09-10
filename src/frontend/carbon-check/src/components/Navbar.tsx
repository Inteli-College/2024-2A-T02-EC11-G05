import React from 'react';
import styled from 'styled-components';



const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 150px; 
    height: auto; 
    margin-left: 30px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin: 0 15px;
    font-size: 18px;
  }
`;

const NavbarComponent: React.FC = () => {
  return (
    <Navbar>
      <Logo>
      <img src="/abundance_img.png" /> 
      </Logo>
    </Navbar>
  );
};

export default NavbarComponent;
