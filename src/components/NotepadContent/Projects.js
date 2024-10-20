import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    margin-bottom: 10px;
    margin-right: 15px;
    font-size: 1.1em;
`;

const VideoWrapper = styled.div`
    margin-top: 20px;
`;

function Projects({ content }) {
    const { projects } = content;
    return (
        <div>
            <h2>News Features</h2>
            {
                projects.map((project, idx) => (
                    <div key={idx}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        
                        {
                            project.links && project.links.map((link, linkIdx) => (
                                <StyledLink key={linkIdx} href={link.url} target="__blank">
                                    {link.text || 'Link'}
                                </StyledLink>
                            ))
                        }
                        <hr />
                    </div>
                ))
            }
            <VideoWrapper>
                <h3>House Bill 4199 Testimony</h3>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/rHPLU4WkFpg" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </VideoWrapper>
        </div>
    );
}

export default Projects;
