import '../../index.css';

function SkillCard({src="", alt=""})
{
        return(
                <>
                        <img src={src} alt={alt} className='inline-block h-15 my-0 mx-8 align-middle transition duration-300' />
                </>
        );
}

function SkillsScrollContainer({skills=[]})
{
        return(
                <>
                        <div className='w-full whitespace-nowrap overflow-hidden relative'>
                                <div className='flex w-max animate-scroll-skills'>
                                        {
                                                [...skills, ...skills].map((skill, i) => (
                                                        <SkillCard
                                                                key={`${skill.name}-${i}`}
                                                                src={skill.src}
                                                                alt={skill.name}
                                                        />
                                                ))
                                        }
                                </div>
                        </div>
                </>
        );
}

export default SkillsScrollContainer;