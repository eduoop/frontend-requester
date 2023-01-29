import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppRoutes } from './Routes/app.routes'
import { GlobalStyle } from './global/globalStyles'

function App() {

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App
