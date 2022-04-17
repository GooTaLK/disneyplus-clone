import { useLayoutEffect, useRef } from 'react'

import './Plan.css'

import Button from '../Button'

function Plan ({
  backgroundUrl,
  title,
  currency,
  description,
  link,
  buttonColor,
  buttonText
}) {
  const plan = useRef()

  useLayoutEffect(() => {
    if (typeof backgroundUrl === 'string') {
      plan.current.style.setProperty('background-image', `url(${backgroundUrl})`)
    }
  }, [])

  return (
    <div className='Plan' ref={plan}>
      <h2 className='medium'>{title}</h2>
      <h3>{currency}</h3>
      <p className='medium'>{description}</p>
      <Button
        color={buttonColor}
        href={link}
        target='_blank'
        rel='noreferrer nopener'
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default Plan
