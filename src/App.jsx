import { useLocation } from 'react-router-dom';

import AppRoutes from './pages/Routes'

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

import { ThemeProvider } from './context/ThemeContext.jsx';

function App() 
{
        const location = useLocation();
        
        return (
                <ThemeProvider>
                        <Navbar/>

                        <main>
                                <AppRoutes/>
                        </main>

                        <Footer/>
                </ThemeProvider>
        )
}

export default App;
