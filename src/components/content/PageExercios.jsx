import styled from 'styled-components';
const Section = styled.section`
  padding: 2rem;
  text-align: left;
  width: 1000px;
  margin: 0 auto;
  

`;

const VideoSection = styled.section`
    display:flex;
  justify-content: center;
  margin: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  color: #343a40;
`;

const Video = styled.iframe`
    width: 700px;
    height: 400px;

    
`;

const VideoLine = styled.hr`
    width: 750px;
    color: #f8f9fa;
`


const PageExercicios= () => {
    return (
        <Section>
            <Title>Exercícios para Estudo</Title>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/v07FdggMK28?si=yGSn507D3UVphYm8" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/X5BUC6Lc8gw?si=1-1fYTsLlDebN870" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/Z7Spq8KVQgQ?si=V0ys_ZcSnhB_S1WT" />
            </VideoSection>
        </Section>
    )
}

export default PageExercicios;