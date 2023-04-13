import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RequireAuth } from '../components/RequireAuth';
import { RequirentAuth } from '../components/RequirentAuth';
import ScrollToTop from '../components/ScrollToTop';
import { SideBar } from '../components/SideBar';
import { AuthContext } from '../context/auth/AuthContext';
import { CreateRequest } from '../pages/CreateRequest';
import { EditRequest } from '../pages/EditRequest';
import { FinishCreate } from '../pages/FinishCreate';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { RecoverAccount } from '../pages/RecoverAccount';
import { Requests } from '../pages/Requests';
import { Snacks } from '../pages/Snacks';

export const AppRoutes = () => {

  const auth = useContext(AuthContext)

  return (
    <Router>
      <ScrollToTop />
      {auth.user &&
        <SideBar />
      }
      <Routes>
        <Route path='/' element={<RequirentAuth><Home /></RequirentAuth>} />
        <Route path='/finish-create/:key' element={<RequirentAuth><FinishCreate /></RequirentAuth>} />
        <Route path='/recover-account/:key' element={<RequirentAuth><RecoverAccount /></RequirentAuth>} />
        <Route path='/requests' element={<RequireAuth><Requests /></RequireAuth>} />
        <Route path='/new-request' element={<RequireAuth><CreateRequest /></RequireAuth>} />
        <Route path='/edit-request/:id' element={<RequireAuth><EditRequest /></RequireAuth>} />
        <Route path='/snacks' element={<RequireAuth><Snacks /></RequireAuth>} />
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
      </Routes>
    </Router>
  )
}
