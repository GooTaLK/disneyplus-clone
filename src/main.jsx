import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'

import { LanguageContextProvider } from './contexts/LanguageContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
