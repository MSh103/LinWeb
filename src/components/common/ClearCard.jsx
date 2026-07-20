import '../../index.css';

function ClearCard({children})
{
        return(
                <>
                        <div className='
                                block w-full md:w-[47%] mt-10 px-8 py-4
                        '>
                                {children}
                        </div>
                </>
        );
}

export default ClearCard;