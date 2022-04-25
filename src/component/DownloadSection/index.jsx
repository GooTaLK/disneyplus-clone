import { useContext } from 'react'

import Sidealign from '../Sidealign'

import { LanguageContext } from '../../contexts/LanguageContext'
import { useImageSwitcher } from '../../hooks/useImageSwitcher'

function DownloadSection ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  const imageSource = useImageSwitcher({
    sources: {
      medium: language.imagesSource.downloadSectionMedium,
      large: language.imagesSource.downloadSectionLarge
    }
  })

  return (
    <Sidealign
      newClass={newClass !== '' ? `${newClass} DownloadSection` : 'DownloadSection'}
      extendImage
      imageSource={imageSource}
      imageAlt='The Lion King'
      titleH3
      title={language.downloadSectionTitle}
      description={language.downloadSectionDescription}
    />
  )
}

export default DownloadSection
