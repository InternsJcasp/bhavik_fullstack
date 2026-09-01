// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'

import './index.css'

import App from './App'

import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { NotificationProvider } from './contexts/NotificationContext'

import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <NotificationProvider>
            <App />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </NotificationProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)