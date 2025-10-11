import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/main.css'
import { Provider } from './components/ui/provider.tsx'
import AppThanks from './AppInvite.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <AppThanks />
    </Provider>
  </StrictMode>,
)
