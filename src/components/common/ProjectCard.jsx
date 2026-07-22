import '../../index.css';

import Paragraphs from '../common/Paragraphs'

function ProjectCard({title="", paragraphs=[], src="", name="", href=""})
{
        return(
                <>
                        <div className='flex my-8 justify-evenly gap-0 md:gap-8'>
                                <div className='w-[50%] md:w-[47%]'>
                                         <h1 className='text-center font-bold text-xs md:text-lg'>{title}</h1>
                                         <hr className="w-1/2 mx-auto my-2" />
                                         <Paragraphs paragraphs={paragraphs}/>
                                </div>
                                <div className='w-[50%] md:w-[47%]'>
                                        <a href={href} target='_blank' className='
                                                flex justify-center align-middle flex-col w-1/2 mx-auto hover:opacity-80 transition duration-300
                                        '>
                                                <img src={src} alt="logo" className='w-full md:w-1/2 mx-auto rounded-xl'/>
                                                <h1 className='text-center text-xs md:text-sm my-4'>{name}</h1>
                                        </a>
                                </div>
                        </div>
                </>
        );
}

export default ProjectCard;