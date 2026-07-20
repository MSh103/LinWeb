import '../../index.css'

function Card({children})
{
        return(
                <>
                <div className="
                        block 
                        [background:var(--gradient)] 
                        w-full 
                        md:w-[47%]
                        border-[var(--border-card)]
                        [border-top:1px_solid_var(--highlight))]
                        mt-10
                        rounded-lg
                        px-[2rem]
                        py-[1rem]
                        shadow-lg
                        shadow-[var(--shadow)]
                ">
                        {children}
                </div>
                </>
        );
}

export default Card;