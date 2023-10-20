import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './pages/header.jsx';
import Footer from './pages/footer.jsx';
import HomePage from './pages/homePage.jsx';
import Login from './components/Login.js';


function AppRouter() {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/sign-in" element={<Login/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default AppRouter