import { useLayoutEffect, useState } from 'react'

import './Sidealign.css'

function Sidealign ({
  newClass = '',
  reverse = false,
  extendImage = false,
  titleH3 = false,
  imageSource: imageSourceProp,
  imageAlt,
  title,
  description
}) {
  const [imageSource, setImageSource] = useState(
    typeof imageSourceProp === 'string' ? imageSourceProp : null
  )

  function fillClassName () {
    let className = 'Sidealign'

    if (reverse) {
      className += ` ${className}--reverse`
    }
    if (newClass !== '') {
      className = `${newClass} ${className}`
    }

    return className
  }

  useLayoutEffect(() => {
    if (typeof imageSourceProp !== 'object') return

    function chooseImageSource () {
      if (window.innerWidth >= 768 && imageSource !== imageSourceProp?.largeWindow) {
        setImageSource(imageSourceProp?.largeWindow)
      } else if (window.innerWidth < 768 && imageSource !== imageSourceProp?.smallWindow) {
        setImageSource(imageSourceProp?.smallWindow)
      }
    }

    chooseImageSource()
    window.addEventListener('resize', chooseImageSource)

    return () => {
      window.removeEventListener('resize', chooseImageSource)
    }
  }, [])

  return (
    <section
      className={fillClassName()}
    >
      <div className={extendImage ? 'Sidealign-image Sidealign-image--extended' : 'Sidealign-image'}>
        <img src={imageSource} alt={imageAlt} />
      </div>
      <div className='Sidealign-text'>
        {
          titleH3 ? <h3>{title}</h3> : <h2>{title}</h2>
        }
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Sidealign
