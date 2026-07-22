import '../../index.css'

function ClearContainer({children, styleName=""})
{
        return(
                <div className={`w-full mt-4 ${styleName}`}>
                        {children}
                </div>
        );
}

export default ClearContainer;
