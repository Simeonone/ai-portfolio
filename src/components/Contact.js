import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 80px 20px;
  background-color: rgba(255, 255, 255, 0.6);
  max-width: 800px;
  margin: 40px auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const InfoItem = styled.p`
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Link = styled.a`
  color: #008000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <ContactInfo>
        <InfoItem>
          <Label>Primary Phone:</Label>
          <Link href="tel:+254713336627">+254 713336627</Link>
        </InfoItem>
        <InfoItem>
          <Label>Primary Email:</Label>
          <Link href="mailto:simeon.kengere@gmail.com">simeon.kengere@gmail.com</Link>
        </InfoItem>
        <InfoItem>
          <Label>Secondary Email:</Label>
          <Link href="mailto:simeon.kengere@ieee.org">simeon.kengere@ieee.org</Link>
        </InfoItem>
        <InfoItem><Label>Location:</Label> Nairobi, Kenya</InfoItem>
        <InfoItem><Label>Time Zone:</Label> GMT+3 (EAT)</InfoItem>
        <InfoItem><Label>Preferred Contact Method:</Label> Email</InfoItem>
        <InfoItem><Label>Available Hours:</Label> 8 AM - 5 PM EAT, Monday-Saturday</InfoItem>
        <InfoItem>
          I'm excited to discuss potential opportunities! Please feel free to reach out
          through any of the contact methods listed above. I look forward to connecting with you.
        </InfoItem>
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact;