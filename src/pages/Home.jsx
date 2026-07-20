import '../index.css'

import Card from '../components/common/Card';
import ClearCard from '../components/common/ClearCard';

import SectionTitle from '../components/common/SectionTitle';
import Paragraphs from '../components/common/Paragraphs';

import Container from '../components/layout/Container';

import SkillsScrollContainer from '../components/common/SkillsCard';

import home from '../data/home.json'
import { useEffect, useState } from 'react';

function Home()
{
        const [skills, setSkills] = useState([]);

        useEffect(()=>{
                setSkills(home.skills.skills.sort((a,b) => a.name.localeCompare(b.name)));
        }, []);

        return(
                <>
                        <div className='flex flex-wrap flex-row gap-[6%] md:flex-row'>
                                <Card>
                                        <SectionTitle title={home.about.title}/>
                                        <Paragraphs paragraphs={home.about.paragraphs}/>
                                </Card>
                                <ClearCard>
                                        <SectionTitle title={home.hero.title}/>
                                        <img src={home.hero.imgSrc} alt="M Sh's Profile Picture" className="
                                                rounded-full w-1/2 md:w-5/6 mx-auto mt-5
                                        "/>
                                </ClearCard>
                        </div>
                        <div className='w-full overflow-hidden bg-[var(--bg)] py-4 px-8 rounded-lg mt-8 shadow-lg shadow-[var(--shadow)]'>
                                <h1 className='font-bold'>{home.skills.title}</h1>
                                <SkillsScrollContainer skills={skills}/>
                        </div>
                </>
        );
}

export default Home;