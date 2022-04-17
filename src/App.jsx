import './App.css'

import Header from './component/Header'
import Hero from './component/Hero'
import PlanList from './component/PlanList'
import MultiDevicesInfo from './component/MultiDevicesInfo'
import Exclusive from './component/Exclusive'
import DownloadSection from './component/DownloadSection'
import Devices from './component/Devices'

function App () {
  return (
    <div className='App'>
      <Header visible={false} />
      <main>
        <Hero newClass='App-section' />
        <PlanList newClass='App-section' />
        <MultiDevicesInfo newClass='App-section' />
        <Exclusive newClass='App-section' />
        <DownloadSection newClass='App-section' />
        <Devices newClass='App-section' />
      </main>
    </div>
  )
}

export default App
