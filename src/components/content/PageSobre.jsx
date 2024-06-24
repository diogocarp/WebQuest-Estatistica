import styled from 'styled-components';

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

const SubTitle = styled.h3`
  font-size: 1.6rem;
  color: #343a40;
  margin-top: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SectionImage = styled.img`
  
  width: 400px;
  height: 220px;
  object-fit: cover;
 
 
`;

const PageSobre = () => {
    return (
    <Section>
      <Title>História da Estatística Aplicada</Title>
      <Paragraph>
        A estatística aplicada tem suas raízes no século XIX, mas foi durante o século XX que ela se consolidou como uma
        disciplina essencial para diversas áreas do conhecimento. A necessidade de analisar dados complexos e tomar decisões
        informadas em ciência, engenharia, economia e outras disciplinas impulsionou o desenvolvimento de métodos
        estatísticos avançados.
      </Paragraph>
      <SubTitle>Ronald Fisher</SubTitle>
      <Paragraph>
        Ronald Fisher, frequentemente considerado o pai da estatística moderna, contribuiu significativamente para a estatística
        aplicada. Ele desenvolveu técnicas fundamentais como a análise de variância (ANOVA) e o teste de hipóteses. Suas
        obras, como "Statistical Methods for Research Workers" e "The Design of Experiments", são marcos na aplicação da
        estatística em experimentos científicos.
      </Paragraph>
      <ImageContainer>
      <SectionImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFi3rxF0D2t8M921FYmkofR9XdZulSZI1KA&s"/>
      </ImageContainer>
      <SubTitle>John Tukey</SubTitle>
      <Paragraph>
        John Tukey foi um estatístico americano conhecido por suas contribuições na análise de dados exploratória e no
        desenvolvimento do conceito de análise de Fourier. Ele introduziu várias ferramentas estatísticas práticas, como o
        box plot, que se tornaram essenciais na visualização e interpretação de dados. Seu trabalho ajudou a popularizar o
        uso da estatística em diversas áreas aplicadas.
      </Paragraph>
      <SubTitle>Jerzy Neyman</SubTitle>
      <Paragraph>
        Jerzy Neyman, juntamente com Egon Pearson, desenvolveu a estrutura do teste de hipóteses Neyman-Pearson, que é um
        dos pilares da teoria estatística moderna. Neyman também foi pioneiro na teoria da estimação intervalar, que fornece
        intervalos de confiança para estimativas de parâmetros populacionais. Suas contribuições foram fundamentais para a
        aplicação da estatística em pesquisa científica.
      </Paragraph>
      <ImageContainer>
      <SectionImage src="https://www.researchgate.net/publication/265266304/figure/fig1/AS:733800719974407@1551963133345/Classical-Neyman-Pearson-hypothesis-testing.png"/>
      </ImageContainer>
      <SubTitle>Conclusão</SubTitle>
      <Paragraph>
        A estatística aplicada é uma disciplina vital que transforma dados em insights valiosos, apoiando a tomada de decisões
        em diversas áreas do conhecimento. As contribuições de Ronald Fisher, John Tukey e Jerzy Neyman foram cruciais para
        o desenvolvimento e popularização das técnicas estatísticas modernas. Seus trabalhos continuam a influenciar a forma
        como os dados são analisados e interpretados, demonstrando a importância da estatística aplicada na compreensão e
        resolução de problemas complexos.
      </Paragraph>
    </Section>
    )
}

export default PageSobre;