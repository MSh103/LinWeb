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
                        <div className='flex flex-wrap flex-col'>
                                <Container>
                                        <SectionTitle title={socials[0].title}/>
                                        <Paragraphs paragraphs={socials[0].paragraphs}/>
                                </Container>
                                <ClearContainer>
                                        <div className='flex flex-wrap flex-row gap-5 py-4 justify-center'>
                                                {
                                                        socials[1].links.map((link, i) => {return(
                                                                <LinkCard key={i} name={link.name} href={link.href} icon={link.icon} isImg={link.isImg} color={link.color}/>
                                                        );})
                                                }
                                        </div>
                                </ClearContainer>
                        </div>
                </>
        );
}

export default Socials;