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
const PageBibliografia = () => {
    return (
       <Section>
        <Title>Bibliografia</Title>
        <Paragraph>
  Montgomery, D. C., & Runger, G. C. (2018). <i>Applied Statistics and Probability for Engineers</i>. John Wiley & Sons.
</Paragraph>
<Paragraph>
  Triola, M. F. (2018). <i>Elementary Statistics</i>. Pearson.
</Paragraph>
<Paragraph>
  Freund, J. E., & Perles, B. M. (2006). <i>Statistics: A First Course</i>. Pearson.
</Paragraph>
<Paragraph>
  Levine, D. M., Stephan, D. F., Krehbiel, T. C., & Berenson, M. L. (2017). <i>Statistics for Managers Using Microsoft Excel</i>. Pearson.
</Paragraph>
<Paragraph>
  DeGroot, M. H., & Schervish, M. J. (2012). <i>Probability and Statistics</i>. Pearson.
</Paragraph>
<Paragraph>
  Ross, S. M. (2014). <i>Introduction to Probability and Statistics for Engineers and Scientists</i>. Academic Press.
</Paragraph>
<Paragraph>
  Fisher, R. A. (1935). <i>The Design of Experiments</i>. Oliver & Boyd.
</Paragraph>
<Paragraph>
  Tukey, J. W. (1977). <i>Exploratory Data Analysis</i>. Addison-Wesley.
</Paragraph>
<Paragraph>
  Neyman, J., & Pearson, E. S. (1933). <i>On the Problem of the Most Efficient Tests of Statistical Hypotheses</i>. Philosophical Transactions of the Royal Society of London. Series A, Containing Papers of a Mathematical or Physical Character.
</Paragraph>
       </Section>

    )
}

export default PageBibliografia;