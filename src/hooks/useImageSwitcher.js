import { useEffect, useState } from 'react'

function useImageSwitcher ({ sources = { medium: '', large: '' }, breakPoint = 768 }) {
  const [imageSource, setImageSource] = useState()

  useEffect(() => {
    function chooseImageSource () {
      if (window.innerWidth >= breakPoint && imageSource !== sources.large) {
        setImageSource(sources.large)
      } else if (window.innerWidth < breakPoint && imageSource !== sources.medium) {
        setImageSource(sources.medium)
      }
    }

    chooseImageSource()
    window.addEventListener('resize', chooseImageSource)

    return () => {
      window.removeEventListener('resize', chooseImageSource)
    }
  }, [imageSource])

  return imageSource
}

export { useImageSwitcher }
