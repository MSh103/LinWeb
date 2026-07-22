import '../../index.css';
import footer from '../../data/footer.json';
import Container from './Container';
import { useTheme } from '../../hooks/useTheme';

function Footer()
{
        const {dark} = useTheme();

        return(
                <footer>
                        <Container styleName='
                                flex justify-between my-16
                        '>
                                <div className='w-4/6 md:w-1/2 lg:w-1/4 text-center my-auto'>
                                        <h1 className='text-[0.6rem] md:text-xs font-extrabold'>{footer.copyright}</h1>
                                        <hr />
                                        <h1 className='text-[0.6rem] md:text-xs font-extrabold'>Version {__APP_VERSION__}</h1>
                                </div>
                                <div className='ml-auto flex text-xl my-auto'>
                                        {footer.buttons.map((button, index) => {return(
                                                <a href={button.href} key={index}>
                                                        <i className={`${button.icon} ${dark ? button.darkColor : button.color} hover:text-[var(--text-muted)] font-extrabold`}></i>
                                                </a>
                                        );})}
                                </div>
                        </Container>
                </footer>
        );
}

export default Footer;