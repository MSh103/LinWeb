import '../../index.css'

function ClearContainer({children, styleName="", className, style={}})
{
        return(
                <div className={`w-full mt-4 ${styleName} ${className}`} style={style}>
                        {children}
                </div>
        );
}

export default ClearContainer;
