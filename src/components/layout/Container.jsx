import '../../index.css'

function Container({children, styleName="", className="", style={}})
{
        return(
                <div className={`
                        w-full 
                        border-(--border-card) 
                        [background:var(--gradient)] 
                        mt-4 
                        rounded-2xl
                        px-4 
                        md:px-8 
                        py-4 
                        md:py-6 
                        shadow-lg
                        ${styleName}
                        ${className}
                `} style={style}>
                        {children}
                </div>
        );
}

export default Container;
