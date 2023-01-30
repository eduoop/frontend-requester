import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import { FinishCreate } from '../pages/FinishCreate';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Router>
        <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/finish-create/:key' element={<FinishCreate/>}/>
        </Routes>
    </Router>
  )
}
