import { useContext } from 'react'

import './Hero.css'

import Button from '../Button'
import Hint from '../Hint'

import { LanguageContext } from '../../contexts/LanguageContext'

function Hero ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <section className={newClass !== '' ? `${newClass} Hero` : 'Hero'}>
      <div className='Hero-background' />

      <div className='Hero-content'>
        <h2>{language.heroTitle}</h2>
        <img src='https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original' alt='Disney logo' />
        <Button color='#6421ff'>{language.offerComboPlusButton}</Button>
        <p>
          <span><a href=''>{language.signupOnlyMonthly}</a></span>
          {' | '}
          <span><a href=''>{language.signupOnlyYearly}</a></span>
        </p>
      </div>

      <Hint animate />
    </section>
  )
}

export default Hero
