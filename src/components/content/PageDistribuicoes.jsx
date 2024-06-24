
import styled from 'styled-components';
const Section = styled.section`
  padding: 2rem;
  text-align: left;
  width: 1000px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SectionImage = styled.img`
  
  width: 610px;
  height: 200px;
  object-fit: cover;
 
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

const PageDistribuicoes = () => {
    return (
        <Section>
        <Title>Distribuições de Probabilidade</Title>
        <Paragraph>
          As distribuições de probabilidade são uma ferramenta fundamental na estatística que descreve como os valores de uma
          variável aleatória são distribuídos. Elas fornecem uma descrição completa da variabilidade dos dados e são
          utilizadas para modelar diferentes fenômenos em várias áreas, como ciência, engenharia, economia e ciências sociais.
        </Paragraph>
        <SubTitle>Distribuição Normal</SubTitle>
        <Paragraph>
          A distribuição normal, também conhecida como distribuição gaussiana, é uma das distribuições de probabilidade mais
          importantes e amplamente utilizadas. Ela é caracterizada por sua forma de sino, sendo simétrica em torno da média.
          Muitos fenômenos naturais, como alturas, pesos e pontuações em testes, seguem aproximadamente uma distribuição
          normal.
        </Paragraph>
        <SubTitle>Distribuição Binomial</SubTitle>
        <Paragraph>
          A distribuição binomial é utilizada para modelar o número de sucessos em uma sequência de experimentos de Bernoulli
          independentes, onde cada experimento tem duas possíveis saídas: sucesso ou fracasso. Ela é definida por dois
          parâmetros: o número de experimentos (n) e a probabilidade de sucesso em cada experimento (p).
        </Paragraph>
        <SubTitle>Distribuição Poisson</SubTitle>
        <Paragraph>
          A distribuição Poisson é usada para modelar o número de eventos que ocorrem em um intervalo de tempo fixo ou em uma
          área fixa, quando esses eventos ocorrem com uma taxa média constante e de forma independente uns dos outros. É
          frequentemente utilizada em estudos de chegadas de chamadas telefônicas, falhas de equipamentos e outros eventos
          raros.
        </Paragraph>
        <SubTitle>Distribuição Exponencial</SubTitle>
        <Paragraph>
          A distribuição exponencial é utilizada para modelar o tempo entre eventos em um processo de Poisson, ou seja, ela
          descreve o tempo de espera até que ocorra o próximo evento. É amplamente aplicada em estudos de confiabilidade e
          teoria das filas.
        </Paragraph>
        <ImageContainer>
            <SectionImage src="https://miro.medium.com/v2/resize:fit:1400/1*0fELhk1g4NmtAdnpOsVOIA.png"/>
        </ImageContainer>
        <SubTitle>Conclusão</SubTitle>
        <Paragraph>
          As distribuições de probabilidade são essenciais para a compreensão e modelagem de variáveis aleatórias e seus
          comportamentos. Cada tipo de distribuição tem suas próprias características e aplicações, permitindo que
          estatísticos e pesquisadores escolham o modelo mais adequado para os dados que estão analisando. Compreender essas
          distribuições é crucial para realizar análises estatísticas precisas e tomar decisões baseadas em dados.
        </Paragraph>
      </Section>
    )
}

export default PageDistribuicoes;