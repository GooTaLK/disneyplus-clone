import { useState } from 'react'

import './Accordion.css'

function Accordion ({ heading, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={open ? 'Accordion open' : 'Accordion'}>
      <button
        className='Accordion-heading'
        onClick={() => setOpen(!open)}
      >
        {heading}
      </button>
      <div className='Accordion-children'>
        {children}
      </div>
    </div>
  )
}

export default Accordion
