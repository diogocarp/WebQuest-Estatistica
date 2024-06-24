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
  
  width: 310px;
  height: 100px;
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

const PageDispersao = () => {
    return (
        <Section>
          <Title>Medidas de Dispersão</Title>
          <Paragraph>
            As medidas de dispersão são estatísticas que descrevem a variabilidade ou a dispersão de um conjunto de dados. Elas
            são essenciais para entender a distribuição dos dados em torno de uma medida central, como a média ou a mediana.
            Enquanto as medidas de tendência central fornecem um valor único que representa o centro dos dados, as medidas de
            dispersão indicam o grau de variação entre os valores individuais no conjunto de dados.
          </Paragraph>
          <SubTitle>Amplitude</SubTitle>
          <Paragraph>
            A amplitude é a medida de dispersão mais simples e é calculada subtraindo-se o menor valor do maior valor no conjunto
            de dados. Embora seja fácil de calcular, a amplitude considera apenas os valores extremos e pode ser muito sensível a
            outliers.
          </Paragraph>
          <ImageContainer>
          <SectionImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggdPbmOzGVNaJ2rBFXs-JGR7S9PlemQz1FeoGjV9Dq5y6hf2s0CbOq6A_df2_56zTKUX2RTTjHBELlt3j4SpO0MPme4a0xJmefuCRwPVZDxTNx95_0O4zcLFKCGGk2b7Esuit248cpQKo/s1600/Amplitude+total.jpg"/>
          </ImageContainer>
          <SubTitle>Desvio Padrão e Variância</SubTitle>
          <Paragraph>
            O desvio padrão é uma medida que indica o quanto os valores de um conjunto de dados diferem da média. Ele é
            calculado como a raiz quadrada da variância, que por sua vez é a média dos quadrados dos desvios dos valores em
            relação à média. O desvio padrão é amplamente utilizado em estatísticas porque fornece uma medida de dispersão em
            termos das unidades dos dados originais.
          </Paragraph>
          <ImageContainer>
          <SectionImage src="https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/devio-padrao-formula-variante-matematica.jpg"/>
          </ImageContainer>
          <SubTitle>Coeficiente de Variação</SubTitle>
          <Paragraph>
            O coeficiente de variação (CV) é uma medida de dispersão relativa que é expressa como uma porcentagem. Ele é
            calculado dividindo-se o desvio padrão pela média e multiplicando-se por 100. O CV é útil para comparar a
            variabilidade entre diferentes conjuntos de dados, especialmente quando as médias dos conjuntos são diferentes.
          </Paragraph>
          <ImageContainer>
          <SectionImage src="https://cdn.economy-pedia.com/2287317/medidas_de_dispersin_-_qu_es-_definicin_y_concepto_2021_economy-wikicom_3.jpg.webp"/>
          </ImageContainer>
          <SubTitle>Intervalo Interquartil (IQR)</SubTitle>
          <Paragraph>
            O intervalo interquartil (IQR) é uma medida de dispersão que descreve a faixa entre o primeiro quartil (Q1) e o terceiro
            quartil (Q3) de um conjunto de dados. O IQR representa a faixa dos valores centrais e é menos sensível a outliers do
            que a amplitude. É especialmente útil para dados que não seguem uma distribuição normal.
          </Paragraph>
          <ImageContainer>
          <SectionImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAAB0CAMAAADw6QSeAAAAM1BMVEX///8AAABHR0eJiYns7OwRERFpaWnDw8Onp6c0NDQjIyPd3d3Q0NCYmJi1tbV6enpXV1dZEzBAAAAExElEQVR4nO2a6ZakIAyFXUAW1/d/2hHUEiHWKSFd0zPnfr+qy2qWm5AEsKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAxfb3xt8fx+5nkKpPhbXNoG9dqMw/pA7s+sMsoWDvsx8W1a7qJeiraui3vo1s7mMubOVFN/WIJ9BhmeT6QDCM/6LuzXRObpqr0KiFDb/PaOmmGPMTsVViHO7jhm5dQfjLN2pOYvJAdV4+jk79Tq17t+klGQm1WY9DJtdOXN7MjjBv0Lo52yoT9HNp4zZiM462xT2BwQoVLWuyuxqDTOjFb3srOJtPrT6eNPj/b1xQsW1C8Om17ddT2WOkMOnEugYvTVJtDmfORfj1ouZJse5Fpy9/Hn9NqjW6aeHRSaytjcSs7btQ28Ptw2M05gXUK7oEq79CNvg4jkj0X9LAqqLaOGXQao45K6JPZ38mRzC8TG2sQitKNyVf5dIxVZhPGbU9dh6vtZOJZd85/L3E7XvjHV+U6mXhq+ajUe+5igyseluIOhUyaT01VpJMYXcVsOyV4koGnS5PYjU5+guXhSYdRe4NXp1e+rA1PPHUIYpHVdJboeJKsoRfZkn6VpdNW5KhXwc+01xrTttLA7mGSaSCq1SSw5+vkZJL6bPam3mvre8iIRpiSTGtuJyE5ShEfxaPvCAfO1akJrODi6c0m+LFOxBCTclKo1jszy0bpzjAq/VmGTmP4b+1N3q6e60T5ThzZ95MEM7LoRBiGiOyZOrlUYy+beKZNMLUKbOSu54lLU97rJ4Y5On2uU3sxQsO3CSYysg/jsbsO2mcPSblxcHKVkEyV2iM6w8QZIk8ne3HMdIVnQ2QaIgN6BkOEEccjnbrUMFQGzNNJXZTh3AQT0cLcmUH409/0+0c6EWF8JtZ+nk7zZTYjbdYsUhchl92Gvn/0McT8qWWXp1NzmY1JV3guREZOd6knkprRM1Ino6qCTJ1kGDFUusJPHtYFxBiJiHUZfOH+O9WJiFhVpk516EFvW3iok0h00m/ciUMnE4/+ZpdUrJM/BLo9zX9aZ8aDJA49osEXZtpk/jfal+o0SGcRtqsWE0XmqORTV13crwsz7RyFOO+/xHSyddraEsbMu2hdYebxRMOOR60uNunrchO55RDUFu5OilwdWTrZw47CyGHZdNIsNXl/CUdepnBToS4yRvdHedhwpXuZSHtn109yqoSWa6OuhUHMyR1qHqFDjbFMWz485vE2xH+Mc6jjTkrdyuRd9/Fd4fGCim90D9U8MlWVc093Md5rZ4Dopt/r5E8HxeRCl2Xo1FnDarG3KMmUNJmt46eLXO/aOO17Vpk2j9qxcZAWsw0zZsdyiKrPNzvknLbYNEGfsmkevW6iVrPbeZN3sutHxldsen89sXlVyjB2fgNnFp7zpxWh/Qs93qtSomqG7WKJhTYnHJTgVzTv+1TfYGBI+c+4DeG/m7d1+E+w/LYl9Rldzfmm0Afor3swC37hbbVsw/YmzFucB2+bopnrdPYbNLtQ2n4pbLR7paEaxle5fh4V1rLfQLzKqH9Jpv3+4OZK5UdQu1Cs7y1/AfdG71HLfoVhkbXsuI76AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8Z/wBNFkZRFX+P2UAAAAASUVORK5CYII="/>
          </ImageContainer>
          <SubTitle>Conclusão</SubTitle>
          <Paragraph>
            As medidas de dispersão são fundamentais na análise estatística, pois complementam as medidas de tendência central e
            fornecem uma visão mais completa da distribuição dos dados. Elas ajudam a identificar a variabilidade, detectar
            outliers e compreender melhor a estrutura dos dados, sendo indispensáveis em diversas aplicações práticas, desde a
            pesquisa científica até a análise de negócios.
          </Paragraph>
        </Section>
      );
}

export default PageDispersao;