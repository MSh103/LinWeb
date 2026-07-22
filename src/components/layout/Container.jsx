import '../../index.css'

function Container({children, styleName=""})
{
        return(
                <div className={`
                        w-full 
                        border-[var(--border-card)] 
                        [background:var(--gradient)] 
                        mt-4 
                        rounded-2xl
                        px-4 
                        md:px-8 
                        py-4 
                        md:py-6 
                        shadow-lg 
                        shadow-[var(--shadow)]
                        ${styleName}
                `}>
                        {children}
                </div>
        );
}

export default Container;
