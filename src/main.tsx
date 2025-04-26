import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary'

console.log('Starting application initialization...')

// Add error handling for the entire application
window.onerror = function(msg, url, lineNo, columnNo, error) {
  console.error('Global error:', { msg, url, lineNo, columnNo, error })
  return false
}

// Add unhandled promise rejection handling
window.onunhandledrejection = function(event) {
  console.error('Unhandled promise rejection:', event.reason)
}

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Root element not found! Make sure index.html contains <div id="root"></div>')
  throw new Error('Failed to find the root element')
}

console.log('Root element found, initializing React...')

try {
  const root = createRoot(rootElement)
  console.log('React root created, starting render...')
  
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>,
  )
  
  console.log('Initial render completed successfully')
} catch (error) {
  console.error('Error during React initialization:', error)
  throw error
}
