import '../../index.css'

function SectionTitle({title=""})
{
        return(
                <>
                        <div className='text-center text-lg md:text-xl my-2'>
                                <h1 className='font-bold text-(--text) mb-2 md:mb-4 text-content'>{title}</h1>
                                <hr />
                        </div>
                </>
        );
}

export default SectionTitle;