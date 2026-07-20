import '../index.css'

import Card from '../components/common/Card';
import ClearCard from '../components/common/ClearCard';

import SectionTitle from '../components/common/SectionTitle';
import Paragraphs from '../components/common/Paragraphs';

import home from '../data/home.json'

function Home()
{
        return(
                <>
                        <div className='flex flex-wrap flex-row gap-[6%] md:flex-row'>
                                <Card>
                                        <SectionTitle title={home[0].title}/>
                                        <Paragraphs paragraphs={home[0].paragraphs}/>
                                </Card>
                                <ClearCard>
                                        <SectionTitle title={home[1].title}/>
                                        <img src={home[1].imgSrc} alt="M Sh's Profile Picture" className="
                                                rounded-full w-1/2 md:w-5/6 mx-auto mt-5
                                        "/>
                                </ClearCard>
                        </div>
                </>
        );
}

export default Home;