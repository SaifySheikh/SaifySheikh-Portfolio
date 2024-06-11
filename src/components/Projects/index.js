import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a variety of projects, ranging from web applications to machine learning algorithms.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} value="all" onClick={() => setToggle('all')}>
            All
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'web app'} value="web app" onClick={() => setToggle('web app')}>
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'android app'} value="android app" onClick={() => setToggle('android app')}>
            ANDROID APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'machine learning'} value="machine learning" onClick={() => setToggle('machine learning')}>
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
          {projects.filter((item) => item.category === toggle).map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Projects;
