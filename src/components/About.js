import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';

const AboutContainer = styled.section`
  background-color: rgba(255, 255, 255, 0.6);  // Slightly more opaque
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.1);  // Subtle green glow
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: #333;  // Dark gray for better contrast
`;

const InfoText = styled.div`
  flex: 1;
  color: #333;  // Dark gray for better contrast
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 15px;
  color: #00aa00;  // Darker green to match the theme
`;

function About() {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Content>
        <InfoItem>
          <Icon icon={faGraduationCap} />
          <InfoText>
            <h3>Education</h3>
            <p>Master's degree in Computer Science, University of Nairobi</p>
            <p>Bachelor's degree in Computer Science, University of Nairobi</p>
            <p>Diploma in Computer Science, University of Nairobi</p>
            <p>C.P.A Part 1 Section 1, Strathmore University</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <Icon icon={faBriefcase} />
          <InfoText>
            <h3>Experience</h3>
            <p>Software Engineer, Ministry of Interior and National Administration (2024 Feb-Present)</p>
            <p>Research Assistant, The University of Nairobi (2023 Feb - 2024 Jan)</p>
            <p>Data Scientist, Fujita Corporation Japan (2022 Oct - 2023 Feb)</p>
            <p>Systems Integration Engineer (2021 Nov - 2022 Aug)</p>
            <p>Software Engineer, Ongata Rongai Sub County Hospital (2021 May - 2021 Nov)</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <Icon icon={faCode} />
          <InfoText>
            <h3>Concepts and Tools</h3>
            <p>Machine Learning, Data Science, Natural Language Processing, Embedded Programming, Cybersecurity, Networking, Python, TensorFlow, PyTorch, Scikit-learn, JavaScript, SQL, Edge Impulse</p>
          </InfoText>
        </InfoItem>
      </Content>
    </AboutContainer>
  );
}

export default About;