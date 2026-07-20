import '../../index.css'

function SectionTitle({title=""})
{
        return(
                <>
                        <div className='text-center text-xl my-2'>
                                <h1 className='font-bold mb-4'>{title}</h1>
                                <hr />
                        </div>
                </>
        );
}

export default SectionTitle;