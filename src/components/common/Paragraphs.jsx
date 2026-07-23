import React from 'react';
import '../../index.css';


function Paragraphs({paragraphs=[]})
{
        return(
                <>
                        <div className='py-2'>
                                {paragraphs.map((p, i) => {return(
                                        <React.Fragment key={i}>
                                                <p className='text-xs md:text-sm text-content'>{p}</p><br />
                                        </React.Fragment>
                                );})}
                        </div>
                </>
        );
}

export default Paragraphs;