import { createContext, useState } from 'react'

import { languages } from './languages'

const LanguageContext = createContext()

function LanguageContextProvider ({ children }) {
  const [language, setLanguage] = useState(languages.spanish)

  function toggleLanguage (language) {
    switch (language) {
      case 'english':
        setLanguage(languages.english)
        break

      case 'spanish':
        setLanguage(languages.spanish)
        break

      default:
        break
    }
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageContextProvider }
