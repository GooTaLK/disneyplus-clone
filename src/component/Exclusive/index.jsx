import { useContext } from 'react'

import './Exclusive.css'

import { LanguageContext } from '../../contexts/LanguageContext'

function Exclusive ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <div className={newClass !== '' ? `${newClass} Exclusive` : 'Exclusive'}>
      <h2>{language.exclusiveTitle}</h2>
      <p>{language.exclusiveDescription}</p>
      <div className='Exclusive-grid'>
        {
          language.imagesSource.exclusives.map((source, index) => {
            return (
              <div className='Exclusive-gridItem' key={index}>
                <img src={source} alt='Exclusive Disney+' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Exclusive
