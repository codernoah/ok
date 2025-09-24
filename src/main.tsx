import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './styles/main.css'
import { Provider } from './components/ui/provider.tsx'
import { DarkMode } from './components/ui/color-mode.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <DarkMode>
        <App />
      </DarkMode>
    </Provider>
  </StrictMode>,
)
