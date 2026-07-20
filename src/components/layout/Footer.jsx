import '../../index.css';
import footer from '../../data/footer.json';
import Container from './Container';
import { useEffect } from 'react';

function Footer()
{
        return(
                <>
                        <footer className='
                                flex [background:var(--gradient)] w-full py-4 px-5 my-16 rounded-lg justify-between shadow-lg shadow-[var(--shadow)]
                        '>
                                <div className='w-4/6 md:w-1/4 text-center my-auto'>
                                        <h1 className='text-xs font-extrabold'>{footer.copyright}</h1>
                                        <hr />
                                        <h1 className='text-xs font-extrabold'>Version {__APP_VERSION__}</h1>
                                </div>

                                <div className='ml-auto flex text-xl my-auto'>
                                        {footer.buttons.map((button, index) => {return(
                                                <a href={button.href} key={index}>
                                                        <i className={`${button.icon} text-${button.color} hover:text-[var(--primary)] font-extrabold`}></i>
                                                </a>
                                        );})}
                                </div>
                        </footer>
                </>
        );
}

export default Footer;