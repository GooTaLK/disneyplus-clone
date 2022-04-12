import { useContext } from 'react'

import './TextSide.css'

import { LanguageContext } from '../../contexts/LanguageContext'

function TextSide ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <section
      className={newClass !== '' ? `${newClass} TextSide` : 'TextSide'}
    >
      <img src='https://cnbl-cdn.bamgrid.com/assets/dae41e464f90a537d55064a1609a99890fb93a408af955519dbe9992e0ab3a04/original' alt='4 Devices' />
      <div className='TextSide-text'>
        <h2 className='TextSide-title'>{language.multidevicesInfoTitle}</h2>
        <p className='TextSide-description'>{language.multidevicesInfoDescription}</p>
      </div>
    </section>
  )
}

export default TextSide
