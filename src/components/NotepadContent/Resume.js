import React from 'react';
import { Button } from '@react95/core';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin-bottom: 10px;
`;

function Resume({ content }) {
  const { workExperience, education, honors } = content;

  return (
    <div>
      <h2>Experience</h2>
      {workExperience.map((exp, idx) => (
        <div key={idx}>
          <p>
            <b>{exp.jobTitle}</b> | {exp.company}
          </p>
          <p>{exp.period}</p>
          {exp.accomplishments.map((a, idx) => (
            <p key={idx}>{a}</p>
          ))}
          <StyledLink href={exp.resumeLink} target="_blank" download>
            <Button style={{ fontSize: '14px' }} className="pointer">
              Learn More
            </Button>
          </StyledLink>
          <br />
        </div>
      ))}
      <hr />
      <h2>Education</h2>
      {education.map((edu, idx) => (
        <div key={idx}>
          <p>
            <b>{edu.degree}</b> | {edu.institution}
          </p>
          {edu.details.map((d, idx) => (
            <p key={idx}>{d}</p>
          ))}
          
        </div>
      ))}
      <hr />
      <h2>Honors</h2>
      {honors.map((hon, idx) => (
        <div key={idx}>
          <p>
            <b>{hon.name}</b> | {hon.institution} | {hon.year}
          </p>
          {hon.resumeLink && (
            <StyledLink href={hon.resumeLink} target="_blank" download>
              <Button style={{ fontSize: '14px' }} className="pointer">
                Learn More
              </Button>
            </StyledLink>
          )}
        </div>
      ))}
      
    </div>
  );
}

export default Resume;
