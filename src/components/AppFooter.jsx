import styled from 'styled-components';

const Footer = styled.footer`
height: 3rem;
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e9ecef;
`;

const LeftText = styled.div`
  color: #343a40;
  font-size: 1rem;
`;

const RightText = styled.div`
  color: #6c757d;
  font-size: 1rem;
`;

const AppFooter = () => {
  return (
    <Footer>
      <LeftText>WebQuest</LeftText>
      <RightText>Diogo e Filipe - Todos os direitos reservados</RightText>
    </Footer>
  );
};

export default AppFooter;
