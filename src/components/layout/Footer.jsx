import '../../index.css';
import footer from '../../data/footer.json';
import Container from './Container';
import { useTheme } from '../../hooks/useTheme';

import Animate from '../../animations/Animate';

import packageJson from '../../../package.json';

function Footer()
{
        const {dark} = useTheme();

        return(
                <footer>
                        <Animate delay='450ms' duration='450ms'>
                        <Container styleName='
                                flex justify-between my-16
                        '>
                                <div className='w-4/6 md:w-1/2 lg:w-1/4 text-center my-auto'>
                                        <h1 className='text-[0.6rem] md:text-xs font-extrabold footer'>{footer.copyright}</h1>
                                        <hr />
                                        <h1 className='text-[0.6rem] md:text-xs font-extrabold footer'>Version {packageJson.version}</h1>
                                </div>
                                <div className='ml-auto flex text-xl my-auto'>
                                        {footer.buttons.map((button, index) => {return(
                                                <a href={button.href} key={index} className='footer'>
                                                        <i className={`${button.icon} ${dark ? button.darkColor : button.color} hover:text-(--text-muted) font-extrabold`}></i>
                                                </a>
                                        );})}
                                </div>
                        </Container>
                        </Animate>
                </footer>
        );
}

export default Footer;