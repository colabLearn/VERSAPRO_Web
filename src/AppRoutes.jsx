import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// Lazy load route components
const Home = lazy(() => import('./components/Home'));
const Project = lazy(() => import('./components/Project'));
const Contact = lazy(() => import('./components/Contact'));
const Partners = lazy(() => import('./components/Partners'));

const AppRoutes = () => {
    return (
            <Routes>
               <Route path="/" element={<Home/>} />
               {/* <Route path="/team" element={<Team/>} /> */}
               <Route path="/project" element={<Project/>} />
               <Route path="/contact" element={<Contact/>} />
               <Route path="/partners" element={<Partners/>} />
            </Routes>
    );
};

export default AppRoutes;