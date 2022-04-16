import { useContext } from 'react'

import Sidealign from '../Sidealign'

import { LanguageContext } from '../../contexts/LanguageContext'

function MultiDevicesInfo ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <Sidealign
      newClass={newClass}
      reverse
      imageSource='https://cnbl-cdn.bamgrid.com/assets/f09e9344c17a11eb6aaa054704cdb169ec8c2f9a661a5119994c632c47d72dd1/original'
      imageAlt='4 devices'
      title={language.multidevicesInfoTitle}
      description={language.multidevicesInfoDescription}
    />
  )
}

export default MultiDevicesInfo
