import '../index.css'

import ClearCard from '../components/common/ClearCard';

import SectionTitle from '../components/common/SectionTitle';
import Paragraphs from '../components/common/Paragraphs';

import Container from '../components/layout/Container';

import SkillsScrollContainer from '../components/common/SkillsCard';

import Animate from '../animations/Animate';

import home from '../data/home.json'
import { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

function Home()
{
        const [skills, setSkills] = useState([]);
        const {language} = useLanguage();

        useEffect(()=>{
                setSkills(home[language].skills.skills.sort((a,b) => a.name.localeCompare(b.name)));
        }, []);

        return(
                <>
                        <div className='flex flex-wrap flex-col gap-[6%] md:flex-row justify-center'>
                                <Animate delay='100ms' duration='450ms'>
                                        <Container styleName='md:w-[47%]'>
                                                <SectionTitle title={home[language].about.title}/>
                                                <Paragraphs paragraphs={home[language].about.paragraphs}/>
                                        </Container>
                                </Animate>
                                <Animate delay='180ms' duration='450ms'>
                                <ClearCard styleName='mt-2!'>
                                        <SectionTitle title={home[language].hero.title}/>
                                        <img src={home[language].hero.imgSrc} alt="M Sh's Profile Picture" className="
                                                rounded-full w-1/2 md:w-5/6 mx-auto mt-5
                                        "/>
                                </ClearCard>
                                </Animate>
                        </div>
                        
                        <Animate delay='300ms' duration='450ms'>
                        <Container styleName='my-10!'>
                                <h1 className='font-bold text-content text-(--text)'>{home[language].skills.title}</h1>
                                <SkillsScrollContainer skills={skills}/>
                        </Container>
                        </Animate>
                </>
        );
}

export default Home;