import { useContext } from 'react'

import './FAQSection.css'

import Accordion from '../Accordion'

import { LanguageContext } from '../../contexts/LanguageContext'

function FAQSection ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <section className={newClass !== '' ? `${newClass} FAQSection` : 'FAQSection'}>
      <h2>{language.FAQTitle}</h2>
      <Accordion heading={language.FAQ1}>
        <p className='medium'>{language.FAQ1AnswerTitle}</p>
        <ul>
          {
            language.FAQ1AnswerList.map((item, index) => {
              return (
                <li key={index}>
                  <p className='medium'>{item}</p>
                </li>
              )
            })
          }
        </ul>
      </Accordion>
      <Accordion heading={language.FAQ2}>
        <p className='medium'>{language.FAQ2AnswerTitle}</p>
        <ul>
          {
            language.FAQ2AnswerList.map((item, index) => {
              return (
                <li key={index}>
                  <p className='medium'>{item}</p>
                </li>
              )
            })
          }
        </ul>
        <p className='medium'>{language.FAQ2AnswerFootnote}</p>
      </Accordion>
      <Accordion heading={language.FAQ3}>
        <p className='medium'>{language.FAQ3Answer}</p>
      </Accordion>
    </section>
  )
}

export default FAQSection
