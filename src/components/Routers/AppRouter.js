import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Container from '../common/Container';
import Home from '../Home/Home';
import Students from '../Student/Students';
import Self from '../Student/Self';
import Login from '../Auth/Login';
import Navbar from '../Navbar/Navbar';
import NavButton from '../Navbar/NavButton';

const AppRouter = () => {

    // Home screen
    // mock Login screen
    // Students
    // my page

    // optional teacher page - my teacher

    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Self />} />
                <Route path="/students" element={<Students />} />
            </Routes>
        </Container>
    )
}

export default AppRouter;