import './App.css'

import Header from './component/Header'
import Hero from './component/Hero'
import PlanList from './component/PlanList'
import Sidealign from './component/Sidealign'
import Exclusive from './component/Exclusive'

function App () {
  return (
    <div className='App'>
      <Header visible={false} />
      <main>
        <Hero newClass='App-section' />
        <PlanList newClass='App-section' />
        <Sidealign newClass='App-section' />
        <Exclusive newClass='App-section' />
      </main>
    </div>
  )
}

export default App
