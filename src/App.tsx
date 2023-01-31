import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppRoutes } from './Routes/app.routes'
import { GlobalStyle } from './global/globalStyles'
import { SideBar } from './components/SideBar'
import { AuthContext } from './context/auth/AuthContext'

function App() {

  const auth = useContext(AuthContext)

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App
