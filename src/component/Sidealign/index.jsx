import './Sidealign.css'

function Sidealign ({
  newClass = '',
  reverse = false,
  extendImage = false,
  titleH3 = false,
  imageSource,
  imageAlt,
  title,
  description
}) {
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
