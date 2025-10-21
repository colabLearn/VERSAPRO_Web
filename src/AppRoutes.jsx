import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Project from './components/Project';
import Contact from './components/Contact'; 
import Partners from './components/Partners';

const AppRoutes = () => {
    return (
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/team" element={<Team/>} />
               <Route path="/project" element={<Project/>} />
               <Route path="/contact" element={<Contact/>} />
               <Route path="/partners" element={<Partners/>} />
            </Routes>
    );
};

export default AppRoutes;