import '../../index.css';

import Paragraphs from '../common/Paragraphs'

function ProjectCard({title="", paragraphs=[], src="", name="", href=""})
{
        return(
                <>
                        <div className='flex my-8 justify-evenly gap-8'>
                                <div className='w-[40%]'>
                                         <h1 className='text-center font-bold'>{title}</h1>
                                         <hr className="w-1/2 mx-auto my-2" />
                                         <Paragraphs paragraphs={paragraphs}/>
                                </div>
                                <div className='w-[40%]'>
                                        <a href={href} target='_blank' className='
                                                flex justify-center align-middle flex-col w-1/2 mx-auto hover:opacity-80 transition duration-300
                                        '>
                                                <img src={src} alt="logo" className='w-3/4 rounded-xl mx-auto'/>
                                                <h1 className='text-center text-sm my-4'>{name}</h1>
                                        </a>
                                </div>
                        </div>
                </>
        );
}

export default ProjectCard;