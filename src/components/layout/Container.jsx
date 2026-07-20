import '../../index.css'

function Container({children})
{
        return(
                <div className='w-full border-[var(--border-card)] border[border-top:1px_solid_var(--highlight)] [background:var(--gradient)] mt-4 rounded-lg px-[2rem] py-[3rem] shadow-lg shadow-[var(--shadow)]'>
                        {children}
                </div>
        );
}

export default Container;
