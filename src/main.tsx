import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';
import { AuthProvider } from "../src/context/auth/AuthProvider";
import { SideBar } from './components/SideBar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <AuthProvider>
      <App />
    </AuthProvider>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
  </>
)
