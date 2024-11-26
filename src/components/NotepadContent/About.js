import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Space between the image and the text */
`;

const CircleImage = styled.img`
  width: 150px;  /* Adjust the size as needed */
  height: 150px; /* Adjust the size as needed */
  border-radius: 50%;
  object-fit: cover;
`;

function About({ content }) {
  const { paragraphs } = content;
  return (
    <div>
      <ImageContainer>
        <CircleImage 
          alt="Simon Farruqui" 
          src={require('/Users/simonfarruqui/Desktop/Computer Science/simonfarruqui.com-master/src/assets/sf3.png')} 
        />
      </ImageContainer>
      <h2>About Me</h2>
      {
        paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))
      }
    </div>
  );
}

export default About;
