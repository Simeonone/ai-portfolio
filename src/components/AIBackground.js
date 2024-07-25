import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(1); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2a2a2a;
  z-index: -1;
  overflow: hidden;
`;

const Node = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #00ff00;
  opacity: 0.7;
  border-radius: 50%;
  animation: ${pulse} 3s infinite ease-in-out;
`;

const shootingStar = keyframes`
  0% {
    transform: translateX(0) translateY(0) rotate(-45deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(-500px) translateY(500px) rotate(-45deg);
    opacity: 0;
  }
`;

const ShootingStar = styled.div`
  position: absolute;
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, #00ff00, transparent);
  animation: ${shootingStar} 3s linear infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top}%;
  left: 100%;
`;

function AIBackground() {
  const nodes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
  }));

  return (
    <BackgroundContainer>
      {nodes.map((node) => (
        <Node
          key={node.id}
          style={{
            top: node.top,
            left: node.left,
            animationDelay: node.animationDelay,
          }}
        />
      ))}
    </BackgroundContainer>
  );
}

export default AIBackground;