import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import HeaderNotConnect from './pages/headerNotConnect.jsx';
import HeaderConnect from './pages/headerConnect.jsx';
import Footer from './pages/footer.jsx';
import HomePage from './pages/homePage.jsx';
import LoginRouter from './identification/routerLogin.js';
import ProfilRouter from './identification/routerProfil.js';

function AppRouter() {
    return (
      <Router>
        <RouteRenderer />
        <Footer/>
      </Router>
    );
}
  
function RouteRenderer() {
    let location = useLocation();
    const isProfileRoute = location.pathname.startsWith('/profile');

    return (
        <>
        {isProfileRoute ? <HeaderConnect /> : <HeaderNotConnect />}
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sign-in/*" element={<LoginRouter/> }/>
            <Route path='/profile/*' element={<ProfilRouter/>} />
        </Routes>
        </>
    );
}
  
export default AppRouter;