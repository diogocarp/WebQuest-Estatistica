import styled from "styled-components";
const Section = styled.section`
  padding: 2rem;
  text-align: left;
  width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #343a40;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #343a40;
  line-height: 1.5;
  margin: 1rem 0;
`;
const PageBlog = () => {
    return (
       <Section>
        <Title>Sobre o Blog</Title>
        <Paragraph>
        O trabalho WebQuest, proposto pelo professor Luciano O. Condori, para a disciplina de Estatística Aplicada, do terceiro semestre do curso de ADS, é elaborar um trabalho sobre a História da Estatística e suas aplicações matemáticas.
        </Paragraph>
        <Paragraph>Autores: Diogo Carpinelli e Filipe Hernandez</Paragraph>
        <Paragraph>RA: 1430482313001 e 1430482223031</Paragraph>
        <Paragraph>Instituição: FATEC Carapicuíba</Paragraph>
        <Paragraph>Curso: Análise e Desenvolvimento de Sistemas</Paragraph>
        <Paragraph>E-mails: diogo.santos62@fatec.sp.gov.br e filipe.hernandez@fatec.sp.gov.br</Paragraph>

       </Section>

    )
}

export default PageBlog;