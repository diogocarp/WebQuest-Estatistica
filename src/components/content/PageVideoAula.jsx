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

const PageVideoAula = () => {
    return (
        <Section>
            <Title>Video Aulas para Estudo</Title>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/mSk2vjGXA90?si=uc9HKY_k9bpUuigV" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/JEwd0Vlqapo?si=RIWu-2r1JYPL7Iar" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/vqZb_Fqj1C0?si=_txB-b5ACtw6OVQ1" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/lm5MK7SAbs0?si=M077qsUmwl_Lzybw" />
            </VideoSection>
            
        </Section>
    )
}

export default PageVideoAula;