import { useContext } from 'react'

import './Devices.css'

import DevicesItem from '../DevicesItem'

import { LanguageContext } from '../../contexts/LanguageContext'

function Devices ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <section className={newClass !== '' ? `${newClass} Devices` : 'Devices'}>
      <h2>{language.devicesTitle}</h2>
      <div className='Devices-grid'>
        <DevicesItem
          imageSource='https://cnbl-cdn.bamgrid.com/assets/d73b7c534afd2af2a454dbd47bd6c766c70e334ce8137084e9cd25c2644dd267/original'
          imageAlt={language.devicesComputerTitle}
          title={language.devicesComputerTitle}
          devices={language.devicesComputerList}
        />
        <DevicesItem
          imageSource='https://cnbl-cdn.bamgrid.com/assets/00fb59319fa715222100d8a84d11bc7e23a42970b4f413c9e85166d0cfba9346/original'
          imageAlt={language.devicesTvTitle}
          title={language.devicesTvTitle}
          devices={language.devicesTvList}
        />
        <DevicesItem
          imageSource='https://cnbl-cdn.bamgrid.com/assets/51b639d2ebe97ee175975c29d42a90b0e043713856db8e5d6d9fb87b2b3a48c0/original'
          imageAlt={language.devicesGameConsolesTitle}
          title={language.devicesGameConsolesTitle}
          devices={language.devicesGameConsolesList}
        />
        <DevicesItem
          imageSource='https://cnbl-cdn.bamgrid.com/assets/66475056e769443ef9a491a48dfa44059c8964890ae9ef7c4f69f322693c59d8/original'
          imageAlt={language.devicesMobileTabletTitle}
          title={language.devicesMobileTabletTitle}
          devices={language.devicesMobileTabletList}
        />
      </div>
    </section>
  )
}

export default Devices
