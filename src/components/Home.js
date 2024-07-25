import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
`;

const Content = styled.div`
  max-width: 800px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #00ff00;
`;

const Intro = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

function Home() {
  return (
    <HomeContainer>
      <Content>
        <Title>Welcome to My AI/ML Portfolio</Title>
        <Intro>
          Hello! I'm Simeon Osiemo, a passionate AI/ML enthusiast with a strong background in Computer Science. 

          I'm a dedicated AI Engineer with an extensive expertise in Artificial Intelligence, Machine Learning, and Natural Language Processing. 
          Proficient in Python, JavaScript, and open-source AI tools, models, and libraries. 
          Proven track record of developing scalable, maintainable, and secure software solutions, improving efficiency, and optimizing user experience.
        </Intro>
      </Content>
    </HomeContainer>
  );
}

export default Home;