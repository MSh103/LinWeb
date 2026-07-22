import '../../index.css';

function ClearCard({children, styleName=""})
{
        return(
                <>
                        <div className={`
                                block w-full md:w-[47%] mt-10 px-8 py-4 ${styleName}
                        `}>
                                {children}
                        </div>
                </>
        );
}

export default ClearCard;