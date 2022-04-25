import { useContext } from 'react'

import Sidealign from '../Sidealign'

import { LanguageContext } from '../../contexts/LanguageContext'

function MultiDevicesInfo ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <Sidealign
      newClass={newClass}
      reverse
      imageSource={language.imagesSource.multidevices}
      imageAlt='4 devices'
      title={language.multidevicesInfoTitle}
      description={language.multidevicesInfoDescription}
    />
  )
}

export default MultiDevicesInfo
