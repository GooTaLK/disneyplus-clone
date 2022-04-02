import { useLayoutEffect, useRef } from 'react'

import './Button.css'

function Button ({ highlight = false, color = '', height = NaN, newClass = '', children, ...props }) {
  const linkRef = useRef()
  const className = highlight ? 'Button--highlight' : 'Button'

  useLayoutEffect(() => {
    if (!highlight && typeof color === 'string' && color !== '') {
      linkRef.current.style.backgroundColor = color
    }
    if (typeof height === 'number' && height > 0) {
      linkRef.current.setProperty('--height', `${height}px`)
    }
  }, [])

  return (
    <a
      className={newClass !== '' ? `${className} ${newClass}` : className}
      ref={linkRef}
      {...props}
    >
      {children}
    </a>
  )
}

export default Button
