import { useContext } from 'react'

import './Sidealign.css'

import { LanguageContext } from '../../contexts/LanguageContext'

function Sidealign ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <section
      className={newClass !== '' ? `${newClass} Sidealign` : 'Sidealign'}
    >
      <img src='https://cnbl-cdn.bamgrid.com/assets/dae41e464f90a537d55064a1609a99890fb93a408af955519dbe9992e0ab3a04/original' alt='4 Devices' />
      <div className='Sidealign-text'>
        <h2>{language.multidevicesInfoTitle}</h2>
        <p>{language.multidevicesInfoDescription}</p>
      </div>
    </section>
  )
}

export default Sidealign
