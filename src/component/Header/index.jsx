import { useContext } from 'react'

import './Header.css'

import Button from '../Button'

import { LanguageContext } from '../../contexts/LanguageContext'

function Header ({ visible = true }) {
  const { language } = useContext(LanguageContext)

  return (
    <header className={visible ? 'Header' : 'Header Header--invisible'}>
      <nav className='pinned'>
        <Button
          highlight
          href='https://www.disneyplus.com/login'
          target='_blank'
          rel='noreferrer noopener'
        >
          {language.loginButton}
        </Button>
      </nav>
      <nav>
        <a className='Header-logo' href='/'>
          <img
            src='https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original'
            alt='Disney logo'
          />
        </a>
        <Button
          href='https://www.disneyplus.com/sign-up?type=standard'
          target='_blank'
          rel='noreferrer noopener'
        >
          {language.signupButton}
        </Button>
        <Button
          highlight
          href='https://www.disneyplus.com/login'
          target='_blank'
          rel='noreferrer noopener'
        >
          {language.loginButton}
        </Button>
      </nav>
    </header>
  )
}

export default Header
