import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import '../../index.css'
import navBar from '../../data/navbar.json'


import Container from './Container';

function NavButton({href="/", title="Home", active=false, setOpen})
{
return(<>
                {active ? 
                <Link to={href} className="
                        block text-2xl my-4 font-bold transition duration-300 text-[var(--secondary)] hover:text-[var(--text-muted)]
                " onClick={() => setOpen(false)}>{title}</Link> :                 
                <Link to={href} className="
                        block text-2xl my-4 font-normal transition duration-300 text-[var(--text)] hover:text-[var(--secondary)]
                " onClick={() => setOpen(false)}>{title}</Link>}
        </>);
}

function ThemeButton({ state = false, setState })
{
        return(
                <button onClick={() => {setState(!state)}} className="
                        text-[var(--primary)]
                        hover:text-[var(--text)] 
                        w-[2.75rem]
                        h-[2.75rem]
                        p-0
                        transition
                        duration-300
                ">      
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1  1-12.77.04"></path>
                        </svg>
                </button>
        );
}

function Burger({ open = false }) {
  const barColor = open ? 'var(--primary)' : undefined; // red-500 when open, otherwise let CSS classes handle it

  return (
    <div className="group flex flex-col gap-1.5 w-6 h-6 relative align-middle">
      <span
        className="block w-6 h-0.5 bg-[var(--text-muted)] group-hover:bg-[var(--text)] transition-[transform,background-color] duration-300 ease-in-out"
        style={{
          transform: open
            ? 'translateY(8px) rotate(45deg)'
            : 'translateY(0) rotate(0deg)',
          backgroundColor: barColor,
        }}
      ></span>
      <span
        className="block w-6 h-0.5 bg-[var(--text-muted)] group-hover:bg-[var(--text)] transition-[opacity,background-color] duration-200 ease-in-out"
        style={{ opacity: open ? 0 : 1, backgroundColor: barColor }}
      ></span>
      <span
        className="block w-6 h-0.5 bg-[var(--text-muted)] group-hover:bg-[var(--text)] transition-[transform,background-color] duration-300 ease-in-out"
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

function NavOverlay({dark=false})
{
        const location = useLocation();
        const [isOpen, setIsOpen] = useState(false);

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
                                className={`fixed inset-0 z-40 flex flex-col items-baseline justify-items-start transition-opacity duration-300 ease-in-out ${
                                        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                                }`}
                                style={{ background: 'var(--bg)' }}
                        >
                                {/* nav links go here */}
                                <div className='
                                        my-8 mx-2 py-8 px-8 md:mx-32 md:my-4
                                '>
                                        <NavButton setOpen={setIsOpen} href="/" title='Home' active={location.pathname === '/' ? true : false}/>
                                        <NavButton setOpen={setIsOpen} href="/Socials" title='Socials' active={location.pathname === '/Socials' ? true : false}/>
                                        <NavButton setOpen={setIsOpen} href="/Projects" title='Projects' active={location.pathname === '/Projects' ? true : false}/>
                                </div>
                                <div className='mt-auto mb-10 px-8'>
                                        {navBar.buttons.map((button, index) => {return(
                                                <a href={button.href} key={index}>
                                                        <i className={`${button.icon} hover:text-[var(--primary)] font-extrabold ${dark ? button.darkColor : button.color}`}></i>
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
        const {dark, setDark} = useTheme();
       
        return(
                <nav>
                        <Container styleName='flex px-6 overflow-hidden'>
                                <div className="my-auto mr-auto">
                                        <h1 className="
                                                text-lg
                                                md:text-2xl
                                                my-auto
                                                font-saudi
                                                hover:text-[var(--bg-dark)]
                                                transition
                                                duration-300
                                                text-nowrap
                                        "><Link className='cursor-default' to="/">{navBar.title}</Link></h1>
                                </div>
                                <div className='my-auto'>
                                        <ThemeButton state={dark} setState={setDark}/>
                                </div>
                                <div className='my-auto'>
                                        <NavOverlay dark={dark}/>
                                </div>         
                        </Container>
                </nav>
        );
}

export default Navbar;