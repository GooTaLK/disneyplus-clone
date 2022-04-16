import { useContext } from 'react'

import Sidealign from '../Sidealign'

import { LanguageContext } from '../../contexts/LanguageContext'

const imageSources = {
  smallWindow: 'https://cnbl-cdn.bamgrid.com/assets/8c66d5e074d0d278b8077f21d579ba049835a2f380d3fa02684407fa27555e1b/original',
  largeWindow: 'https://cnbl-cdn.bamgrid.com/assets/76fc866dc046df64c9ae6cc4be1d0aacbe5b188299726c6312f6009e6143399d/original'
}

function DownloadSection ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <Sidealign
      newClass={newClass !== '' ? `${newClass} DownloadSection` : 'DownloadSection'}
      extendImage
      imageSource={imageSources}
      imageAlt='The Lion King'
      titleH3
      title={language.downloadSectionTitle}
      description={language.downloadSectionDescription}
    />
  )
}

export default DownloadSection
