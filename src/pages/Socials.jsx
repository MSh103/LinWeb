import '../index.css';

import Container from '../components/layout/Container';
import ClearContainer from '../components/layout/ClearContainer';

import SectionTitle from '../components/common/SectionTitle';
import Paragraphs from '../components/common/Paragraphs.jsx';

import LinkCard from '../components/common/LinkCard.jsx';

import socials from '../data/socials.json';

import {useLanguage} from '../hooks/useLanguage.jsx'

import Animate from '../animations/Animate.jsx';

function Socials()
{
        const {language} = useLanguage();

        return(
                <>
                        <div className='flex flex-wrap flex-col gap-[6%] md:flex-row'>
                                <Animate delay='100ms' duration='450ms'>
                                <Container styleName='md:w-[47%]'>
                                        <SectionTitle title={socials[language].title}/>
                                        <Paragraphs paragraphs={socials[language].paragraphs}/>
                                </Container>
                                </Animate>
                                <Animate delay='180ms' duration='450ms'>
                                <ClearContainer styleName='md:w-[47%]'>
                                        <div className='flex flex-wrap flex-row gap-6 md:gap-4 py-2 md:py-4 justify-center'>
                                                {
                                                        socials[language].links.map((link, i) => {return(
                                                                <LinkCard key={i} name={link.name} href={link.href} icon={link.icon} isImg={link.isImg} color={link.color} darkColor={link.darkColor}/>
                                                        );})
                                                }
                                        </div>
                                </ClearContainer>
                                </Animate>
                        </div>
                </>
        );
}

export default Socials;