import '../index.css';

import Container from '../components/layout/Container';
import ClearContainer from '../components/layout/ClearContainer';

import SectionTitle from '../components/common/SectionTitle';
import Paragraphs from '../components/common/Paragraphs.jsx';

import LinkCard from '../components/common/LinkCard.jsx';

import socials from '../data/socials.json';

function Socials()
{
        return(
                <>
                        <div className='flex flex-wrap flex-col gap-[6%] md:flex-row'>
                                <Container styleName='md:w-[47%]'>
                                        <SectionTitle title={socials.title}/>
                                        <Paragraphs paragraphs={socials.paragraphs}/>
                                </Container>
                                <ClearContainer styleName='md:w-[47%]'>
                                        <div className='flex flex-wrap flex-row gap-6 md:gap-4 py-2 md:py-4 justify-center'>
                                                {
                                                        socials.links.map((link, i) => {return(
                                                                <LinkCard key={i} name={link.name} href={link.href} icon={link.icon} isImg={link.isImg} color={link.color} darkColor={link.darkColor}/>
                                                        );})
                                                }
                                        </div>
                                </ClearContainer>
                        </div>
                </>
        );
}

export default Socials;