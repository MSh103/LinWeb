import { useLocation } from 'react-router-dom';

import AppRoutes from './pages/Routes'

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

function App() 
{
        const location = useLocation();
        
        return (
                <>
                        <Navbar/>

                        <main>
                                <AppRoutes/>
                        </main>

                        <Footer/>
                </>
        )
}

export default App;
