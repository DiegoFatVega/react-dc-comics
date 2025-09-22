import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Supports weights 300-800
// Import our custom CSS
import './styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import '@fontsource-variable/open-sans';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
