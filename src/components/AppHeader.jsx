import { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 1;
  color: #343a40;
`;

const Names = styled.p`
  margin: 0;
  color: #6c757d;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  margin-top: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 1em;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
  &:last-child {
    margin-right: 0;
  }
  

  
`;

const NavLink = styled.a`
  font-size: 1.1rem;  
  text-decoration: none;
  color: #666;
  cursor: pointer;
  &:hover {
    color:darkblue;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color:darkblue;
  }
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f8f9fa;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  min-width: 160px;
`;

const DropdownItem = styled.a`
  color: #666;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
`;

const AppHeader = ({ onNavClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <Header>
      <Title>WebQuest Estatística Aplicada</Title>
      <Names>Diogo Carpinelli e Filipe Hernandez</Names>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink onClick={() => onNavClick('inicio')}>Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => onNavClick('sobre-estatistica')}>Sobre Estatística</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => onNavClick('medidas-dispersao')}>Medidas de Dispersão</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => onNavClick('distribuicoes-probabilidade')}>Distribuições de Probabilidade</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => onNavClick('video-aulas')}>Vídeo Aulas</NavLink>
          </NavItem>
          <Dropdown>
            <DropdownButton onClick={toggleDropdown}>Mais</DropdownButton>
            <DropdownContent isOpen={isDropdownOpen}>
              <DropdownItem onClick={() => onNavClick('exercicios')}>Exercícios</DropdownItem>
              <DropdownItem onClick={() => onNavClick('bibliografia')}>Bibliografia</DropdownItem>
              <DropdownItem onClick={() => onNavClick('sobre-o-blog')}>Sobre o Blog</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </NavList>
      </Nav>
    </Header>
  );
};

export default AppHeader;
