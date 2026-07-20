import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../index.css'

function NavButton({href="/", title="Home", active=false})
{
return(<>
                {active ? 
                <Link to={href} className="
                        w-auto 
                        h-[2.75rem] 
                        text-center 
                        p-[0.65rem]
                        border-b-[0.35rem]
                        border-[var(--secondary)]
                        rounded-[0.25rem]
                        mx-1
                        hover:border-[var(--primary)]
                        hover:text-[var(--text)]
                        transition
                        duration-300
                        my-auto
                        font-bold
                ">{title}</Link> :                 
                <Link to={href} className="
                        w-auto 
                        h-[2.75rem] 
                        text-center 
                        p-[0.65rem]
                        border-b-[0.35rem]
                        border-[var(--primary)]
                        rounded-[0.25rem]
                        mx-1
                        hover:border-[var(--text)]
                        hover:text-[var(--text)]
                        transition
                        duration-300
                        my-auto
                        font-bold
                ">{title}</Link>}
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
                        <i className="fa-solid fa-power-off fa-lg"></i>
                </button>
        );
}

function Navbar()
{
        const location = useLocation();
        const [dark, setDark] = useState(false);
       
        useEffect(() => {
                document.documentElement.classList.toggle("dark", dark);
                document.documentElement.classList.toggle("light", !dark);
        }, [dark]);
       
        return(
                <nav>
                        <div className="
                                flex
                                [background:var(--gradient)] 
                                py-[1rem] 
                                px-[2rem]
                                border-[var(--border-card)]
                                [border-top: 1px solid var(--highlight))]
                                rounded-[1rem]
                                mt-[1rem]
                                shadow-[var(--shadow)]
                                shadow-lg
                                overflow-hidden
                                justify-center
                                align-middle
                        ">
                                <div className="w-[3rem] my-auto">
                                        <h1 className="
                                                text-2xl
                                                my-auto
                                                font-saudi
                                                hover:text-[var(--bg-dark)]
                                                transition
                                                duration-300
                                                text-nowrap
                                        "><Link className='cursor-default' to="/">محمد شيخ</Link></h1>
                                </div>
       
                                <div className="
                                        m-auto
                                        w-fit
                                ">
                                        <NavButton
                                                href="/"
                                                title="Home"  
                                                active={location.pathname === "/" ? true : false}
                                        />

                                        <NavButton
                                                href="/Socials"
                                                title="Socials"  
                                                active={location.pathname === "/Socials" ? true : false}
                                        />

                                        <NavButton
                                                href="/Projects"
                                                title="Projects"  
                                                active={location.pathname === "/Projects" ? true : false}
                                        />
                                </div>
       
                                <div className="w-[3rem]">
                                        <ThemeButton state={dark} setState={setDark}/>
                                </div>
                                       
                                {/* <button className="bg-[var(--bg-dark)] p-1 hover:bg-[var(--bg-light)]" onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"}</button> */}
                        </div>
                </nav>
        );
}

export default Navbar;