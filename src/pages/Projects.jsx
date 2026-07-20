import React from 'react';
import '../index.css'

import Container from '../components/layout/Container';

import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/common/ProjectCard';

import projects from '../data/projects.json';

function Projects()
{
        return(
                <>
                        <div className='flex flex-col flex-wrap'>
                                <Container>
                                        <SectionTitle title={projects[0].title}/>
                                        {
                                                projects[0].projects.map((project, i) =>{return(
                                                        <React.Fragment>
                                                                <ProjectCard title={project.title} paragraphs={project.paragraphs} src={project.src} name={project.name} href={project.href}/>
                                                        </React.Fragment>
                                                );})
                                        }
                                </Container>
                        </div>
                </>
        );
}

export default Projects;