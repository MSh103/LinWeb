import '../index.css'

import Container from '../components/layout/Container';

import Animate from '../animations/Animate';

function NotFound()
{
        return(
                <>
                        <Animate delay='100ms' duration='450ms'>
                        <Container>
                                <div className='h-[50vh] flex justify-center align-middle'>
                                        <h1 className='text-center text-5xl my-auto'>Error 404</h1>
                                </div>
                        </Container>
                        </Animate>
                </>
        );
}

export default NotFound;