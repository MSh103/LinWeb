import { Route, Routes } from 'react-router-dom';

import Home from "./Home.jsx"
import Projects from "./Projects.jsx"
import Socials from "./Socials.jsx"
import NotFound from "./NotFound.jsx"

export default function AppRoutes()
{
        return(

                <Routes>
                        <Route path="/"         element={<Home/>}/>
                        <Route path="/Socials"  element={<Socials/>}/>
                        <Route path="/Projects" element={<Projects/>}/>
                        <Route path="*"         element={<NotFound/>}/>
                </Routes>
        );
}

