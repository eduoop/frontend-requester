import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Router>
        <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
  )
}
