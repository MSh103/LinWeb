import React from 'react';
import '../index.css'

import Container from '../components/layout/Container';

import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/common/ProjectCard';

import data from '../data/projects.json';
import { useLanguage } from '../hooks/useLanguage';

import Animate from '../animations/Animate';

function Projects()
{
        const {language} = useLanguage();

        return(
                <>
                        <div className='flex flex-col flex-wrap'>
                                <Animate delay='100ms' duration='450ms'>
                                <Container>
                                        <SectionTitle title={data[language].title}/>
                                        {
                                                data[language].projects.map((project, i) =>{return(
                                                        <React.Fragment key={i}>
                                                                <Animate delay={`${i*200}ms`} duration='450ms'>
                                                                <ProjectCard title={project.title} paragraphs={project.paragraphs} src={project.src} name={project.name} href={project.href}/>
                                                                </Animate>
                                                        </React.Fragment>
                                                );})
                                        }
                                </Container>
                                </Animate>
                        </div>
                </>
        );
}

export default Projects;