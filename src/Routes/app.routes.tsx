import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import { SideBar } from '../components/SideBar';
import { AuthContext } from '../context/auth/AuthContext';
import { CreateRequest } from '../pages/CreateRequest';
import { FinishCreate } from '../pages/FinishCreate';
import { Home } from '../pages/Home';
import { RecoverAccount } from '../pages/RecoverAccount';
import { Requests } from '../pages/Requests';

export const AppRoutes = () => {

  const auth = useContext(AuthContext)

  return (
    <Router>
      <ScrollToTop />
      {auth.user &&
        <SideBar />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/finish-create/:key' element={<FinishCreate />} />
        <Route path='/recover-account/:key' element={<RecoverAccount />} />
        <Route path='/requests' element={<Requests />} />
        <Route path='/new-request' element={<CreateRequest />} />
      </Routes>
    </Router>
  )
}
