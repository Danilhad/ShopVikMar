import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoot } from '@telegram-apps/telegram-ui'
import App from './App'

// Импортируйте стили Telegram UI
import '@telegram-apps/telegram-ui/dist/styles.css'
// import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot
      appearance="light" // или "dark", "auto"
      platform="ios" // или "android", "auto"
    >
      <App />
    </AppRoot>
  </StrictMode>,
)