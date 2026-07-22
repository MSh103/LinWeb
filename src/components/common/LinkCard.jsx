import '../../index.css';
import { useTheme } from '../../hooks/useTheme';


function LinkCard({ href="", icon="", name="", isImg=false, color="", darkColor=color})
{
        const {dark} = useTheme();

        return(
                <>
                        <a className='
                                flex
                                [background:var(--gradient)]
                                w-5/6
                                border-[var(--border-card)]
                                border-b-4
                                border-b-[var(--primary)]
                                hover:border-b-[var(--secondary)]
                                active:border-b-[var(--secondary)]
                                md:active:border-b-[var(--text)]
                                rounded-lg
                                px-8
                                py-4
                                shadow-lg
                                shadow-[var(--shadow)]
                                transition-colors
                                duration-500
                                items-center
                                justify-center
                                gap-3
                        ' href={href} target='_blank'>
                                <h1 className='mr-auto'>{name}</h1>
                                {isImg ? <img src={icon} alt='logo' className={`${dark ? darkColor : color} w-8`}/> : <i className={`${icon} text-2xl ${dark ? darkColor : color}`}></i>}
                        </a>
                </>
        );
}

export default LinkCard;
