import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react'

const rootElement = document.getElementById('root')!
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
