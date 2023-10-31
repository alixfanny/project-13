import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './pages/header.jsx';
import Footer from './pages/footer.jsx';
import HomePage from './pages/homePage.jsx';
import Profile from './components/Profil.js';
import Authent from './identification/auth.js';
import LoginRouter from './identification/routerLogin.js';


function AppRouter() {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/sign-in" element={<LoginRouter/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default AppRouter