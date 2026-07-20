import '../../index.css';

function LinkCard({ href="", icon="", name="", isImg=false, color=""})
{
        return(
                <>
                        <a className='
                                flex
                                [background:var(--gradient)] 
                                w-48
                                border-[var(--border-card)]
                                [border-bottom:3px_solid_var(--primary))]
                                hover:[border-bottom:3px_solid_var(--secondary))]
                                mt-10
                                rounded-lg
                                px-[2rem]
                                py-[1rem]
                                shadow-lg
                                shadow-[var(--shadow)]
                                transition
                                duration-300
                                items-center
                                justify-center
                                gap-3
                        ' href={href} target='_blank'>
                                <h1 className='mr-auto'>{name}</h1>
                                {isImg ? <img src={icon} alt='logo' className={`${color} w-8`}/> : <i className={`${icon} text-2xl ${color}`}></i>}
                        </a>
                </>
        );
}

export default LinkCard;
