import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import '../../index.css'
import navBar from '../../data/navbar.json'

import Animate from '../../animations/Animate'

import Container from './Container';
import { useLanguage } from '../../hooks/useLanguage';

function NavButton({href="/", title="Home", active=false, setOpen})
{
return(<>
                {active ? 
                <Link to={href} className="
                        block text-2xl my-4 font-bold transition duration-300 text-(--secondary) hover:text-(--text-muted)
                " onClick={() => setOpen(false)}>{title}</Link> :                 
                <Link to={href} className="
                        block text-2xl my-4 font-normal transition duration-300 text-(--text) hover:text-(--secondary)
                " onClick={() => setOpen(false)}>{title}</Link>}
        </>);
}

function ThemeButton()
{
        const {dark, setDark} = useTheme();

        return(
                <button onClick={() => {setDark(!dark)}} className="
                        text-(--primary)
                        hover:text-(--text) 
                        w-6
                        h-6
                        p-0
                        transition
                        duration-300
                        mx-4
                ">      
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1  1-12.77.04"></path>
                        </svg>
                </button>
        );
}

function LanguageButton()
{
        const {language, setLanguage} = useLanguage();
        
        return(
                <button onClick={() => {language === "ar" ? setLanguage("en") : setLanguage("ar")}} className="
                        text-(--primary)
                        hover:text-(--text) 
                        max-w-8
                        w-auto
                        h-6
                        p-0
                        transition
                        duration-300
                        mx-0
                ">      
                        <img className='w-full h-full' src={navBar[language].icon}/>
                </button>
        );
}

function Burger({ open = false }) 
{
        const barColor = open ? 'var(--primary)' : undefined; // red-500 when open, otherwise let CSS classes handle it

        const barStyle = "block w-6 h-0.5 bg-[var(--text-muted)] group-hover:bg-[var(--text)] transition-[transform,background-color]  duration-300 ease-in-out";

        return (
                <div className="group flex flex-col gap-1.5 w-6 h-6 relative align-middle">
                      <span
                        className={`${barStyle}`}
                        style={{
                          transform: open
                            ? 'translateY(8px) rotate(45deg)'
                            : 'translateY(0) rotate(0deg)',
                          backgroundColor: barColor,
                        }}
                      ></span>
                      <span
                        className={`${barStyle}`}
                        style={{ opacity: open ? 0 : 1, backgroundColor: barColor }}
                      ></span>
                      <span
                        className={`${barStyle}`}
                        style={{
                          transform: open
                            ? 'translateY(-8px) rotate(-45deg)'
                            : 'translateY(0) rotate(0deg)',
                          backgroundColor: barColor,
                        }}
                      ></span>
                </div>
        );
}

function NavOverlay()
{
        const location = useLocation();
        const [isOpen, setIsOpen] = useState(false);
        const {language} = useLanguage();
        const {dark} = useTheme();

        useEffect(() => {
                if (isOpen) {
                        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                        document.body.style.overflow = 'hidden';
                        document.body.style.paddingRight = `${scrollbarWidth}px`;
                } else {
                        document.body.style.overflow = '';
                        document.body.style.paddingRight = '';
                }
                return () => {
                        document.body.style.overflow = '';
                        document.body.style.paddingRight = '';
                };    
        }, [isOpen]);

        return(
                <>
                        <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex justify-center items-center relative z-50 px-1"
                                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={isOpen}
                        >
                                <div className="text-xl">
                                        <Burger open={isOpen} />
                                </div>
                        </button>

                        <div
                                className={`fixed inset-0 z-40 flex flex-col items-baseline justify-items-start transition-all duration-300 ease-in-out ${
                                        isOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 -translate-x-5 pointer-events-none'
                                }`}
                                style={{ background: 'var(--bg)' }}
                        >
                                {/* nav links go here */}
                                <div className='
                                        my-8 mx-2 py-8 px-8 md:mx-32 md:my-4
                                '>
                                        <NavButton setOpen={setIsOpen} href="/"         title={navBar[language].links[0]} active={location.pathname === '/' ? true : false}/>
                                        <NavButton setOpen={setIsOpen} href="/Socials"  title={navBar[language].links[1]} active={location.pathname === '/Socials' ? true : false}/>
                                        <NavButton setOpen={setIsOpen} href="/Projects" title={navBar[language].links[2]} active={location.pathname === '/Projects' ? true : false}/>
                                </div>
                                <div className='mt-auto mb-10 px-6'>
                                        {navBar.buttons.map((button, index) => {return(
                                                <a href={button.href} key={index} className='p-0 mx-1'>
                                                        <i className={`${button.icon} hover:text-(--text-muted) font-extrabold ${dark ? button.darkColor : button.color}`}></i>
                                                </a>
                                        );})}
                                </div>
                        </div>
                </>
        );
}

function Navbar()
{
        const location = useLocation();
       
        return(
                <nav>
                        <Container styleName='flex px-3! md:px-8! overflow-hidden border-t border-[var(--highlight)]'>
                                <div className="my-auto mr-auto">
                                        <h1 className="
                                                text-lg
                                                md:text-2xl
                                                my-auto
                                                font-saudi
                                                text-(--text)
                                                hover:text-(--bg-dark)
                                                transition
                                                duration-300
                                                text-nowrap
                                                pl-4
                                        "><Link className='cursor-default' to="/">{navBar.title}</Link></h1>
                                </div>
                                <div className='my-auto'>
                                        <LanguageButton/>
                                </div>
                                <div className='my-auto'>
                                        <ThemeButton/>
                                </div>
                                <div className='my-auto'>
                                        <NavOverlay/>
                                </div>         
                        </Container>
                </nav>
        );
}

export default Navbar;