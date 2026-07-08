import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#FCFCFA',
          color: '#171717',
          border: '1px solid #E5E8E2',
          borderRadius: '12px',
          fontSize: '0.875rem',
          boxShadow: '0 12px 30px rgba(110, 143, 90, 0.1)',
        },
        success: { iconTheme: { primary: '#6E8F5A', secondary: '#FCFCFA' } },
        error:   { iconTheme: { primary: '#EF4444', secondary: '#FCFCFA' } },
      }}
    />
  </BrowserRouter>
)
