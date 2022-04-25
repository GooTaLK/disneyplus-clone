import { useEffect, useState } from 'react'

import './App.css'

import Header from './component/Header'
import Hero from './component/Hero'
import PlanList from './component/PlanList'
import MultiDevicesInfo from './component/MultiDevicesInfo'
import Exclusive from './component/Exclusive'
import DownloadSection from './component/DownloadSection'
import Devices from './component/Devices'
import FAQSection from './component/FAQSection'
import Footer from './component/Footer'

const HEIGHT_TO_HIDE_HEADER = 600
let isHeaderVisible

function App () {
  const [headerVisibility, setHeaderVisibility] = useState(false)

  isHeaderVisible = headerVisibility

  useEffect(() => {
    function toggleHeader () {
      const thumbPosition = window.scrollY < HEIGHT_TO_HIDE_HEADER ? 'top' : 'bottom'
      if (thumbPosition === 'top' && !isHeaderVisible) return
      if (thumbPosition === 'bottom' && isHeaderVisible) return

      setHeaderVisibility((prevVisibleState) => !prevVisibleState)
    }

    window.addEventListener('scroll', toggleHeader)

    return () => window.removeEventListener('scroll', toggleHeader)
  }, [])

  return (
    <div className='App'>
      <Header visible={headerVisibility} />
      <main>
        <Hero newClass='App-section' />
        <PlanList newClass='App-section' />
        <MultiDevicesInfo newClass='App-section' />
        <Exclusive newClass='App-section' />
        <DownloadSection newClass='App-section' />
        <Devices newClass='App-section' />
        <FAQSection newClass='App-section' />
        <Footer newClass='App-footer' />
      </main>
    </div>
  )
}

export default App
