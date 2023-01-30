import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import { FinishCreate } from '../pages/FinishCreate';
import { Home } from '../pages/Home';
import { RecoverAccount } from '../pages/RecoverAccount';

export const AppRoutes = () => {
  return (
    <Router>
        <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/finish-create/:key' element={<FinishCreate/>}/>
            <Route path='/recover-account/:key' element={<RecoverAccount/>}/>
        </Routes>
    </Router>
  )
}
