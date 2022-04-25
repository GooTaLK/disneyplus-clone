import { useContext, useLayoutEffect, useRef } from 'react'

import './Hero.css'

import Button from '../Button'
import Hint from '../Hint'

import { LanguageContext } from '../../contexts/LanguageContext'

function Hero ({ newClass = '', hintMoveTo }) {
  const { language } = useContext(LanguageContext)

  const heroBackgroundRef = useRef()

  function hintClickHandler () {
    window.scrollTo({
      top: hintMoveTo,
      behavior: 'smooth'
    })
  }

  useLayoutEffect(() => {
    heroBackgroundRef.current.style.setProperty('--bg-medium', `url(${language.imagesSource.heroMedium})`)
    heroBackgroundRef.current.style.setProperty('--bg-large', `url(${language.imagesSource.heroLarge})`)
  }, [language.language])

  return (
    <section className={newClass !== '' ? `${newClass} Hero` : 'Hero'}>
      <div className='Hero-background' ref={heroBackgroundRef} />

      <div className='Hero-content'>
        <h3>{language.heroTitle}</h3>
        <img
          src='https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original'
          alt='Disney logo'
        />
        <Button
          color='#6421ff'
          href='https://www.disneyplus.com/sign-up?type=bundle'
          target='_blank'
          rel='noreferrer noopener'
        >
          {language.offerComboPlusButton}
        </Button>
        <p className='small'>
          <span><a href='https://www.disneyplus.com/sign-up?type=standard'>{language.signupOnlyMonthly}</a></span>
          {' | '}
          <span><a href='https://www.disneyplus.com/billing?skuInterval=annual&toggle=shown'>{language.signupOnlyYearly}</a></span>
        </p>
      </div>

      <Hint animate toClick={hintClickHandler} />
    </section>
  )
}

export default Hero
