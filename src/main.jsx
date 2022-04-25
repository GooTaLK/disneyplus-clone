import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'

import { LanguageContextProvider } from './contexts/LanguageContext'
import App from './App'

ReactDOM.render(
  <LanguageContextProvider>
    <App />
  </LanguageContextProvider>,
  document.getElementById('root')
)
