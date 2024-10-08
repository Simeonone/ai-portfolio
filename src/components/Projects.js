import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 80px 20px;
  background-color: rgba(255, 255, 255, 0.6);
  max-width: 1200px;
  margin: 40px auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 400px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  // border: 1px solid red;
`;


const ProjectTitle = styled.h3`
  color: #00aa00;  // Green to match the theme
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;
`;
const GitHubButton = styled.a`
  display: inline-block;
  background-color: #00aa00;
  color: #fff;
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
  border: 1px solid green;
  &:hover {
    background-color: #008800;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const DemoButton = styled.a`
  display: inline-block;
  background-color: #0077be; 
  color: #fff;
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-left: 10px; 
  border: 1px solid blue;
  &:hover {
    background-color: #005fa3;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const projects = [
    {
      id: 1,
      title: 'Handwritten digit recognition with CNN',
      description: 'This project implements a Convolutional Neural Network (CNN) to recognize handwritten digits using the MNIST dataset. The model is trained using TensorFlow and Keras, and it can be tested on custom images of handwritten digits.',
      image: 'https://via.placeholder.com/300x200.png?text=Image+Classification',
      github: 'https://github.com/Simeonone/handwritten-digit-recognition'
    },
    {
      id: 2,
      title: 'Natural Language Processing Chatbot',
      description: 'An interactive NLP-powered chatbot that simulates a conversation with Simeon, showcasing his AI expertise through dynamic responses, sentiment analysis, and a user-friendly interface.',
      image: 'https://via.placeholder.com/300x200.png?text=NLP+Chatbot',
      github: 'https://github.com/Simeonone/NLP-chatbot.git'
      // liveDemo: 'https://your-live-demo-url.com'
    },
    {
      id: 3,
      title: 'Automatic Accident Detection and emergency response system',
      description: 'Implemented an ANN model to detect accidents and activate emergency response in real time. Developed with Edge Impulse and Python to work with an Arduino Nano 33 BLE sense Board.',
      image: 'https://via.placeholder.com/300x200.png?text=Automatic+Accident+Detector',
      github: 'https://github.com/Simeonone/an-embedded-fall-detection-system-and-automatic-emergency-response'
    },
  ];

  function Projects() {
    return (
      <ProjectsContainer>
        <Title>Projects</Title>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ButtonContainer>
  {console.log('GitHub URL:', project.github)}
  {project.github && (
    <GitHubButton href={project.github} target="_blank" rel="noopener noreferrer">
      View on GitHub
    </GitHubButton>
  )}
  {console.log('Live Demo URL:', project.liveDemo)}
  {project.liveDemo && (
    <DemoButton href={project.liveDemo} target="_blank" rel="noopener noreferrer">
      Live Demo
    </DemoButton>
  )}
</ButtonContainer>
            </ProjectInfo>
          </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContainer>
    );
  }

export default Projects;