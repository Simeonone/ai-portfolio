import React, { useState } from 'react';
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

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #00aa00;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #00aa00;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  resize: vertical;
`;

const Button = styled.button`
  background-color: #00aa00;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #008800;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server or API
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></TextArea>
        </FormGroup>
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;